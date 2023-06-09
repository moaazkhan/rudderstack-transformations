export function addFirstChannel(event) {

const searchRegex= new RegExp('www.google|search.yahoo|duckduckgo|bing|yandex|www.baidu|search.seznam');

const socialMediaPlatform = new RegExp('facebook|instagram|twitter|linkedin|https://t.co');
const socialRegex = new RegExp('^social|^SOCIAL|^Social');

const emailPlatform = new RegExp('android.gm|mail.');
const emailRegex = new RegExp('email|Email|EMAIL|email_action');

const paidSearchRegex = new RegExp('cpc|CPC|Cpc|ppc|PPC|Ppc');

const displayRegex = new RegExp('display|Display|DISPLAY');

const paidSocialRegex = new RegExp('paid-social|paid_social|Paid-Social|Paid_Social|PAID-SOCIAL|PAID_SOCIAL');

const influencerRegex = new RegExp('influencer|Influencer|INFLUENCER');

const communityPlatform = new RegExp('reddit|Reddit|Quora|quora');
const communityRegex = new RegExp('community|Community|COMMUNITY');

const notReferralPlatform = new RegExp('reddit|Reddit|Quora|quora|www.google|search.yahoo|duckduckgo|bing|yandex|www.baidu|search.seznam|facebook|instagram|twitter|linkedin|https://t.co');
const referralRegex = new RegExp('referral|Referral|REFERRAL');

//Influencer
if(influencerRegex.test(event.traits.first_touch_utm_medium)){
    event.traits.first_touch_channel = "Influencer";
    
    return event.traits.first_touch_channel;
}


//Direct
else if(event.traits.first_touch_utm_source===null  && event.traits.first_touch_utm_medium===null && event.traits.first_touch_utm_campaign===null && event.traits.first_touch_referral_url===null){
    event.traits.first_touch_channel = "Direct";
    
    return event.traits.first_touch_channel;
}

//Organic Search
else if(searchRegex.test(event.traits.first_touch_referral_url) && event.traits.first_touch_utm_medium===null ){
    event.traits.first_touch_channel = "Organic";
    return event.traits.first_touch_channel;
}

//Social
else if((socialMediaPlatform.test(event.traits.first_touch_referral_url) && event.traits.first_touch_utm_medium===null ) || (socialRegex.test(event.traits.first_touch_utm_medium) )){
    event.traits.first_touch_channel = "Social";
    return event.traits.first_touch_channel;
}

//Paid Search
else if(paidSearchRegex.test(event.traits.first_touch_utm_medium) ){
    event.traits.first_touch_channel = "Paid Search";
    return event.traits.first_touch_channel;
}

//Email
else if((emailPlatform.test(event.traits.first_touch_referral_url) && event.traits.first_touch_utm_medium===null ) || (emailRegex.test(event.traits.first_touch_utm_medium) )){
    event.traits.first_touch_channel = "Email";
    
    return event.traits.first_touch_channel;
}

//Display
else if(displayRegex.test(event.traits.first_touch_utm_medium)){
    event.traits.first_touch_channel = "Display";
    
    return event.traits.first_touch_channel;
}

//Paid Social
else if(paidSocialRegex.test(event.traits.first_touch_utm_medium)){
    event.traits.first_touch_channel = "Paid Social";
    
    return event.traits.first_touch_channel;
}


//Community
else if((communityPlatform.test(event.traits.first_touch_referral_url) && event.traits.first_touch_utm_medium===null) || communityRegex.test(event.traits.first_touch_utm_medium)){
    event.traits.first_touch_channel = "Community";
    
    return event.traits.first_touch_channel;
}

//Referral
else if((!notReferralPlatform.test(event.traits.first_touch_referral_url) && event.traits.first_touch_utm_medium===null) || referralRegex.test(event.traits.first_touch_utm_medium) ){
    event.traits.first_touch_channel = "Referral";
    
    return event.traits.first_touch_channel;
}

else {
  event.traits.first_touch_channel = "Other";
  return event.traits.first_touch_channel;
}

}
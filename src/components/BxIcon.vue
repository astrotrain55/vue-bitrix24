<template>
  <div
    class="ui-icon"
    :class="classList"
  >
    <i></i>
  </div>
</template>

<script>
import '../assets/ui/ui.font.opensans.min.css';
import '../assets/ui/ui.icons.base.min.css';
import '../assets/ui/ui.icons.b24.min.css';
import '../assets/ui/ui.icons.disk.min.css';
import '../assets/ui/ui.icons.service.min.css';

export default {
  computed: {
    classList() {
      return {
        'ui-icon-file-empty': this.icon === 'file-empty',
        'ui-icon-file-txt': this.icon === 'file-txt',
        'ui-icon-file-doc': this.icon === 'file-doc',
        'ui-icon-file-xls': this.icon === 'file-xls',
        'ui-icon-file-php': this.icon === 'file-php',
        'ui-icon-file-pdf': this.icon === 'file-pdf',
        'ui-icon-file-ppt': this.icon === 'file-ppt',
        'ui-icon-file-rar': this.icon === 'file-rar',
        'ui-icon-file-zip': this.icon === 'file-zip',
        'ui-icon-file-set': this.icon === 'file-set',
        'ui-icon-file-img': this.icon === 'file-img',
        'ui-icon-file-mov': this.icon === 'file-mov',
        'ui-icon-file-folder': this.icon === 'file-folder',
        'ui-icon-file-folder-shared': this.icon === 'file-folder-shared',
        'ui-icon-file-folder-shared-2': this.icon === 'file-folder-shared-2',
        'ui-icon-common-user': this.icon === 'common-user',
        'ui-icon-common-user-group': this.icon === 'common-user-group',
        'ui-icon-common-company': this.icon === 'common-company',
        'ui-icon-common-phone': this.icon === 'common-phone',
        'ui-icon-common-notification': this.icon === 'common-notification',
        'ui-icon-common-bitrix24': this.icon === 'common-bitrix24',
        'ui-icon-common-cloud': this.icon === 'common-cloud',
        'ui-icon-common-folder': this.icon === 'common-folder',
        'ui-icon-common-info': this.icon === 'common-info',
        'ui-icon-service-alice': this.icon === 'service-alice',
        'ui-icon-service-light-alice': this.icon === 'service-light-alice',
        'ui-icon-service-fb-instagram': this.icon === 'service-fb-instagram',
        'ui-icon-service-light-fb-instagram': this.icon === 'service-light-fb-instagram',
        'ui-icon-service-instagram-fb': this.icon === 'service-instagram-fb',
        'ui-icon-service-light-instagram-fb': this.icon === 'service-light-instagram-fb',
        'ui-icon-service-instagram': this.icon === 'service-instagram',
        'ui-icon-service-light-instagram': this.icon === 'service-light-instagram',
        'ui-icon-service-twilio': this.icon === 'service-twilio',
        'ui-icon-service-light-twilio': this.icon === 'service-light-twilio',
        'ui-icon-service-callback': this.icon === 'service-callback',
        'ui-icon-service-light-callback': this.icon === 'service-light-callback',
        'ui-icon-service-livechat': this.icon === 'service-livechat',
        'ui-icon-service-light-livechat': this.icon === 'service-light-livechat',
        'ui-icon-service-liveid': this.icon === 'service-liveid',
        'ui-icon-service-light-liveid': this.icon === 'service-light-liveid',
        'ui-icon-service-ya': this.icon === 'service-ya',
        'ui-icon-service-light-ya': this.icon === 'service-light-ya',
        'ui-icon-service-ya-dialogs': this.icon === 'service-ya-dialogs',
        'ui-icon-service-light-ya-dialogs': this.icon === 'service-light-ya-dialogs',
        'ui-icon-service-ya-direct': this.icon === 'service-ya-direct',
        'ui-icon-service-light-ya-direct': this.icon === 'service-light-ya-direct',
        'ui-icon-service-1c': this.icon === 'service-1c',
        'ui-icon-service-light-1c': this.icon === 'service-light-1c',
        'ui-icon-service-google': this.icon === 'service-google',
        'ui-icon-service-light-google': this.icon === 'service-light-google',
        'ui-icon-service-google-ads': this.icon === 'service-google-ads',
        'ui-icon-service-light-google-ads': this.icon === 'service-light-google-ads',
        'ui-icon-service-twitter': this.icon === 'service-twitter',
        'ui-icon-service-light-twitter': this.icon === 'service-light-twitter',
        'ui-icon-service-email': this.icon === 'service-email',
        'ui-icon-service-light-email': this.icon === 'service-light-email',
        'ui-icon-service-messenger': this.icon === 'service-messenger',
        'ui-icon-service-light-messenger': this.icon === 'service-light-messenger',
        'ui-icon-service-estore': this.icon === 'service-estore',
        'ui-icon-service-light-estore': this.icon === 'service-light-estore',
        'ui-icon-service-imessage': this.icon === 'service-imessage',
        'ui-icon-service-light-imessage': this.icon === 'service-light-imessage',
        'ui-icon-service-webform': this.icon === 'service-webform',
        'ui-icon-service-light-webform': this.icon === 'service-light-webform',
        'ui-icon-service-sms': this.icon === 'service-sms',
        'ui-icon-service-light-sms': this.icon === 'service-light-sms',
        'ui-icon-service-call': this.icon === 'service-call',
        'ui-icon-service-light-call': this.icon === 'service-light-call',
        'ui-icon-service-call-up': this.icon === 'service-call-up',
        'ui-icon-service-light-call-up': this.icon === 'service-light-call-up',
        'ui-icon-service-infocall': this.icon === 'service-infocall',
        'ui-icon-service-light-infocall': this.icon === 'service-light-infocall',
        'ui-icon-service-site-b24': this.icon === 'service-site-b24',
        'ui-icon-service-light-site-b24': this.icon === 'service-light-site-b24',
        'ui-icon-service-site': this.icon === 'service-site',
        'ui-icon-service-light-site': this.icon === 'service-light-site',
        'ui-icon-service-calltracking': this.icon === 'service-calltracking',
        'ui-icon-service-light-calltracking': this.icon === 'service-light-calltracking',
        'ui-icon-service-telegram': this.icon === 'service-telegram',
        'ui-icon-service-light-telegram': this.icon === 'service-light-telegram',
        'ui-icon-service-bitrix24': this.icon === 'service-bitrix24',
        'ui-icon-service-light-bitrix24': this.icon === 'service-light-bitrix24',
        'ui-icon-service-groupme': this.icon === 'service-groupme',
        'ui-icon-service-light-groupme': this.icon === 'service-light-groupme',
        'ui-icon-service-crm': this.icon === 'service-crm',
        'ui-icon-service-light-crm': this.icon === 'service-light-crm',
        'ui-icon-service-lead': this.icon === 'service-lead',
        'ui-icon-service-light-lead': this.icon === 'service-light-lead',
        'ui-icon-service-deal': this.icon === 'service-deal',
        'ui-icon-service-light-deal': this.icon === 'service-light-deal',
        'ui-icon-service-campaign': this.icon === 'service-campaign',
        'ui-icon-service-light-campaign': this.icon === 'service-light-campaign',
        'ui-icon-service-chatbot': this.icon === 'service-chatbot',
        'ui-icon-service-light-chatbot': this.icon === 'service-light-chatbot',
        'ui-icon-service-common': this.icon === 'service-common',
        'ui-icon-service-light-common': this.icon === 'service-light-common',
        'ui-icon-service-g-assistant': this.icon === 'service-g-assistant',
        'ui-icon-service-light-g-assistant': this.icon === 'service-light-g-assistant',
        'ui-icon-service-microsoft': this.icon === 'service-microsoft',
        'ui-icon-service-light-microsoft': this.icon === 'service-light-microsoft',
        'ui-icon-service-office365': this.icon === 'service-office365',
        'ui-icon-service-light-office365': this.icon === 'service-light-office365',
        'ui-icon-service-skype': this.icon === 'service-skype',
        'ui-icon-service-light-skype': this.icon === 'service-light-skype',
        'ui-icon-service-webchat': this.icon === 'service-webchat',
        'ui-icon-service-light-webchat': this.icon === 'service-light-webchat',
        'ui-icon-service-directline': this.icon === 'service-directline',
        'ui-icon-service-light-directline': this.icon === 'service-light-directline',
        'ui-icon-service-envelope': this.icon === 'service-envelope',
        'ui-icon-service-light-envelope': this.icon === 'service-light-envelope',
        'ui-icon-service-fb-messenger': this.icon === 'service-fb-messenger',
        'ui-icon-service-light-fb-messenger': this.icon === 'service-light-fb-messenger',
        'ui-icon-service-fb-adds': this.icon === 'service-fb-adds',
        'ui-icon-service-light-fb-adds': this.icon === 'service-light-fb-adds',
        'ui-icon-service-outlook': this.icon === 'service-outlook',
        'ui-icon-service-light-outlook': this.icon === 'service-light-outlook',
        'ui-icon-service-vk': this.icon === 'service-vk',
        'ui-icon-service-light-vk': this.icon === 'service-light-vk',
        'ui-icon-service-vk-adds': this.icon === 'service-vk-adds',
        'ui-icon-service-light-vk-adds': this.icon === 'service-light-vk-adds',
        'ui-icon-service-vk-order': this.icon === 'service-vk-order',
        'ui-icon-service-light-vk-order': this.icon === 'service-light-vk-order',
        'ui-icon-service-fb': this.icon === 'service-fb',
        'ui-icon-service-light-fb': this.icon === 'service-light-fb',
        'ui-icon-service-fb-comments': this.icon === 'service-fb-comments',
        'ui-icon-service-light-fb-comments': this.icon === 'service-light-fb-comments',
        'ui-icon-service-slack': this.icon === 'service-slack',
        'ui-icon-service-light-slack': this.icon === 'service-light-slack',
        'ui-icon-service-viber': this.icon === 'service-viber',
        'ui-icon-service-light-viber': this.icon === 'service-light-viber',
        'ui-icon-service-kik': this.icon === 'service-kik',
        'ui-icon-service-light-kik': this.icon === 'service-light-kik',
        'ui-icon-service-apple': this.icon === 'service-apple',
        'ui-icon-service-light-apple': this.icon === 'service-light-apple',
        'ui-icon-service-universal': this.icon === 'service-universal',
        'ui-icon-service-light-universal': this.icon === 'service-light-universal',
        'ui-icon-service-organic': this.icon === 'service-organic',
        'ui-icon-service-light-organic': this.icon === 'service-light-organic',
        'ui-icon-service-telephonybot': this.icon === 'service-telephonybot',
        'ui-icon-service-light-telephonybot': this.icon === 'service-light-telephonybot',
        'ui-icon-service-whatsapp': this.icon === 'service-whatsapp',
        'ui-icon-service-light-whatsapp': this.icon === 'service-light-whatsapp',
        'ui-icon-service-wechat': this.icon === 'service-wechat',
        'ui-icon-service-light-wechat': this.icon === 'service-light-wechat',
        'ui-icon-service-avito': this.icon === 'service-avito',
        'ui-icon-service-light-avito': this.icon === 'service-light-avito',
        'ui-icon-service-mailru': this.icon === 'service-mailru',
        'ui-icon-service-light-mailru': this.icon === 'service-light-mailru',
        'ui-icon-service-sberbank': this.icon === 'service-sberbank',
        'ui-icon-service-light-sberbank': this.icon === 'service-light-sberbank',
        'ui-icon-service-green-sberbank': this.icon === 'service-green-sberbank',
        'ui-icon-service-ok': this.icon === 'service-ok',
        'ui-icon-service-light-ok': this.icon === 'service-light-ok',
        'ui-icon-service-ya-toloka': this.icon === 'service-ya-toloka',
        'ui-icon-service-rest-contact-center': this.icon === 'service-rest-contact-center',
        'ui-icon-service-light-rest-contact-center': this.icon === 'service-light-rest-contact-center',
        'ui-icon-service-audio-infocall': this.icon === 'service-audio-infocall',
        'ui-icon-service-light-audio-infocall': this.icon === 'service-light-audio-infocall',
        'ui-icon-service-olx': this.icon === 'service-olx',
        'ui-icon-service-light-olx': this.icon === 'service-light-olx',
        'ui-icon-service-zoom': this.icon === 'service-zoom',
        'ui-icon-service-light-zoom': this.icon === 'service-light-zoom',
        'ui-icon-service-blue-zoom': this.icon === 'service-blue-zoom',
        'ui-icon-service-livechat-24': this.icon === 'service-livechat-24',
        'ui-icon-service-widget': this.icon === 'service-widget',
        'ui-icon-service-light-widget': this.icon === 'service-light-widget',
        'ui-icon-service-wheel': this.icon === 'service-wheel',
        'ui-icon-service-light-wheel': this.icon === 'service-light-wheel',
        'ui-icon-service-play': this.icon === 'service-play',
        'ui-icon-service-light-play': this.icon === 'service-light-play',
        'ui-icon-service-other': this.icon === 'service-other',
        'ui-icon-service-light-other': this.icon === 'service-light-other',
        'ui-icon-service-cart': this.icon === 'service-cart',
        'ui-icon-service-light-cart': this.icon === 'service-light-cart',
        'ui-icon-service-add': this.icon === 'service-add',
        'ui-icon-service-light-add': this.icon === 'service-light-add',
        'ui-icon-service-arrows': this.icon === 'service-arrows',
        'ui-icon-service-light-arrows': this.icon === 'service-light-arrows',
        'ui-icon-service-call-in': this.icon === 'service-call-in',
        'ui-icon-service-light-call-in': this.icon === 'service-light-call-in',
        'ui-icon-service-call-out': this.icon === 'service-call-out',
        'ui-icon-service-light-call-out': this.icon === 'service-light-call-out',
      };
    },
  },
  props: {
    icon: {
      type: String,
      default: 'file-empty',
    },
  },
  name: 'bx-icon',
};
</script>

<style lang="stylus">
.ui-icon-service-light-instagram-fb > i
  background-color #ebeff2 !important
</style>

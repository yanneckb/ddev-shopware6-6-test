(window["webpackJsonpPluginswag-pay-pal"]=window["webpackJsonpPluginswag-pay-pal"]||[]).push([[598],{9629:function(){},9598:function(n,a,e){"use strict";e.r(a),e.d(a,{default:function(){return t}}),e(7064);var t=Shopware.Component.wrapComponentConfig({template:'{% block swag_paypal_content_card_channel_config_vaulting %}\n<sw-card\n    positionIdentifier="swag-paypal-card-channel-config-vaulting"\n    :title="$tc(\'swag-paypal.settingForm.vaulting.cardTitle\')"\n    class="swag-paypal-vaulting"\n    :is-loading="isLoadingMerchantInformation"\n    help-text="test"\n>\n    {% block swag_paypal_content_card_channel_config_vaulting_settings %}\n    <div v-if="actualConfigData" class="swag-paypal-settings-vaulting">\n\n        {% block swag_paypal_content_card_channel_config_vaulting_settings_description_title %}\n        <div class="swag-paypal-settings-vaulting-description-title">\n            {{ $tc(\'swag-paypal.settingForm.vaulting.description.title\') }}\n        </div>\n        {% endblock %}\n\n        {% block swag_paypal_content_card_channel_config_vaulting_settings_description_text %}\n        <div>\n            {{ $tc(\'swag-paypal.settingForm.vaulting.description.text\') }}\n        </div>\n        {% endblock %}\n\n        {% block swag_paypal_content_card_channel_config_vaulting_settings_wallet %}\n        <sw-inherit-wrapper\n            v-if="canHandleVaulting && !isLoadingMerchantInformation"\n            v-model:value="actualConfigData[\'SwagPayPal.settings.vaultingEnabledWallet\']"\n            :inheritedValue="selectedSalesChannelId === null ? null : allConfigs[\'null\'][\'SwagPayPal.settings.vaultingEnabledWallet\']"\n            :customInheritationCheckFunction="checkBoolFieldInheritance"\n        >\n            <template #content="props">\n                <sw-switch-field\n                    name="SwagPayPal.settings.vaultingEnabledWallet"\n                    bordered\n                    :mapInheritance="props"\n                    :label="$tc(\'swag-paypal.settingForm.vaulting.enableWallet.label\')"\n                    :disabled="props.isInherited || !acl.can(\'swag_paypal.editor\')"\n                    :value="props.currentValue"\n                    @update:value="props.updateCurrentValue"\n                />\n            </template>\n        </sw-inherit-wrapper>\n        {% endblock %}\n\n        {% block swag_paypal_content_card_channel_config_vaulting_settings_acdc %}\n        <sw-inherit-wrapper\n            v-if="canHandleVaulting && !isLoadingMerchantInformation"\n            v-model:value="actualConfigData[\'SwagPayPal.settings.vaultingEnabledACDC\']"\n            :inheritedValue="selectedSalesChannelId === null ? null : allConfigs[\'null\'][\'SwagPayPal.settings.vaultingEnabledACDC\']"\n            :customInheritationCheckFunction="checkBoolFieldInheritance"\n        >\n            <template #content="props">\n                <sw-switch-field\n                    name="SwagPayPal.settings.vaultingEnabledACDC"\n                    bordered\n                    :mapInheritance="props"\n                    :label="$tc(\'swag-paypal.settingForm.vaulting.enableACDC.label\')"\n                    :disabled="props.isInherited || !acl.can(\'swag_paypal.editor\')"\n                    :value="props.currentValue"\n                    @update:value="props.updateCurrentValue"\n                />\n            </template>\n        </sw-inherit-wrapper>\n        {% endblock %}\n\n        {% block swag_paypal_content_card_channel_config_vaulting_settings_venmo %}\n        <sw-inherit-wrapper\n            v-if="canHandleVaulting && !isLoadingMerchantInformation"\n            v-model:value="actualConfigData[\'SwagPayPal.settings.vaultingEnabledVenmo\']"\n            :inheritedValue="selectedSalesChannelId === null ? null : allConfigs[\'null\'][\'SwagPayPal.settings.vaultingEnabledVenmo\']"\n            :customInheritationCheckFunction="checkBoolFieldInheritance"\n        >\n            <template #content="props">\n                <sw-switch-field\n                    name="SwagPayPal.settings.vaultingEnabledVenmo"\n                    bordered\n                    :mapInheritance="props"\n                    :label="$tc(\'swag-paypal.settingForm.vaulting.enableVenmo.label\')"\n                    :disabled="props.isInherited || !acl.can(\'swag_paypal.editor\')"\n                    :value="props.currentValue"\n                    @update:value="props.updateCurrentValue"\n                />\n            </template>\n        </sw-inherit-wrapper>\n        {% endblock %}\n\n        {% block swag_paypal_content_card_channel_config_vaulting_settings_onboarding %}\n        <div v-if="!canHandleVaulting && !isLoadingMerchantInformation">\n            {% block swag_paypal_content_card_channel_config_vaulting_settings_onboarding_button %}\n            <a\n                v-show="!isSandbox"\n                class="sw-button sw-button--ghost swag-paypal-settings-vaulting-activate-button"\n                target="_blank"\n                :href="onboardingUrlLive"\n                :disabled="!acl.can(\'swag_paypal.editor\')"\n                data-paypal-onboard-complete="onboardingCallbackLive"\n                data-paypal-button="true"\n            >\n                {{ $tc(\'swag-paypal.settingForm.vaulting.activateButton.label\') }}\n            </a>\n            <a\n                v-show="isSandbox"\n                class="sw-button sw-button--ghost swag-paypal-settings-vaulting-activate-button"\n                target="_blank"\n                :href="onboardingUrlSandbox"\n                :disabled="!acl.can(\'swag_paypal.editor\')"\n                data-paypal-onboard-complete="onboardingCallbackSandbox"\n                data-paypal-button="true"\n            >\n                {{ $tc(\'swag-paypal.settingForm.vaulting.activateButton.label\') }}\n            </a>\n            {% endblock %}\n        </div>\n        {% endblock %}\n\n    </div>\n    {% endblock %}\n</sw-card>\n{% endblock %}\n',inject:["acl","SwagPayPalApiCredentialsService"],mixins:[Shopware.Mixin.getByName("swag-paypal-notification"),Shopware.Mixin.getByName("swag-paypal-credentials-loader")],props:{actualConfigData:{type:Object,required:!0,default:()=>({})},allConfigs:{type:Object,required:!0},selectedSalesChannelId:{type:String,required:!1,default:null},isSaveSuccessful:{type:Boolean,required:!0}},data(){return{merchantInformation:null,isLoadingMerchantInformation:!1}},computed:{isSandbox(){return this.actualConfigData["SwagPayPal.settings.sandbox"]},canHandleVaulting(){return this.merchantInformation?.merchantIntegrations?.capabilities?.some(n=>n?.name==="PAYPAL_WALLET_VAULTING_ADVANCED"&&n?.status==="ACTIVE")}},watch:{isSaveSuccessful(n){!1!==n&&this.createdComponent()}},created(){this.createdComponent()},methods:{async createdComponent(){this.isLoadingMerchantInformation=!0,await this.fetchMerchantInformation(),this.isLoadingMerchantInformation=!1},async fetchMerchantInformation(){this.merchantInformation=await this.SwagPayPalApiCredentialsService.getMerchantInformation(this.selectedSalesChannelId).catch(n=>(this.createNotificationFromError({errorResponse:n}),null))},checkBoolFieldInheritance(n){return"boolean"!=typeof n}}})},7064:function(n,a,e){var t=e(9629);t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[n.id,t,""]]),t.locals&&(n.exports=t.locals),e(5346).Z("05902b2a",t,!0,{})},5346:function(n,a,e){"use strict";function t(n,a){for(var e=[],t={},i=0;i<a.length;i++){var l=a[i],o=l[0],r={id:n+":"+i,css:l[1],media:l[2],sourceMap:l[3]};t[o]?t[o].parts.push(r):e.push(t[o]={id:o,parts:[r]})}return e}e.d(a,{Z:function(){return h}});var i="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!i)throw Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l={},o=i&&(document.head||document.getElementsByTagName("head")[0]),r=null,s=0,c=!1,d=function(){},p=null,u="data-vue-ssr-id",g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(n,a,e,i){c=e,p=i||{};var o=t(n,a);return f(o),function(a){for(var e=[],i=0;i<o.length;i++){var r=l[o[i].id];r.refs--,e.push(r)}a?f(o=t(n,a)):o=[];for(var i=0;i<e.length;i++){var r=e[i];if(0===r.refs){for(var s=0;s<r.parts.length;s++)r.parts[s]();delete l[r.id]}}}}function f(n){for(var a=0;a<n.length;a++){var e=n[a],t=l[e.id];if(t){t.refs++;for(var i=0;i<t.parts.length;i++)t.parts[i](e.parts[i]);for(;i<e.parts.length;i++)t.parts.push(b(e.parts[i]));t.parts.length>e.parts.length&&(t.parts.length=e.parts.length)}else{for(var o=[],i=0;i<e.parts.length;i++)o.push(b(e.parts[i]));l[e.id]={id:e.id,refs:1,parts:o}}}}function v(){var n=document.createElement("style");return n.type="text/css",o.appendChild(n),n}function b(n){var a,e,t=document.querySelector("style["+u+'~="'+n.id+'"]');if(t){if(c)return d;t.parentNode.removeChild(t)}if(g){var i=s++;a=w.bind(null,t=r||(r=v()),i,!1),e=w.bind(null,t,i,!0)}else a=_.bind(null,t=v()),e=function(){t.parentNode.removeChild(t)};return a(n),function(t){t?(t.css!==n.css||t.media!==n.media||t.sourceMap!==n.sourceMap)&&a(n=t):e()}}var m=function(){var n=[];return function(a,e){return n[a]=e,n.filter(Boolean).join("\n")}}();function w(n,a,e,t){var i=e?"":t.css;if(n.styleSheet)n.styleSheet.cssText=m(a,i);else{var l=document.createTextNode(i),o=n.childNodes;o[a]&&n.removeChild(o[a]),o.length?n.insertBefore(l,o[a]):n.appendChild(l)}}function _(n,a){var e=a.css,t=a.media,i=a.sourceMap;if(t&&n.setAttribute("media",t),p.ssrId&&n.setAttribute(u,a.id),i&&(e+="\n/*# sourceURL="+i.sources[0]+" */\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}}]);
"use strict";(window["webpackJsonpPluginswag-pay-pal"]=window["webpackJsonpPluginswag-pay-pal"]||[]).push([[653],{653:function(n,e,t){t.r(e),t.d(e,{default:function(){return a}});var a=Shopware.Component.wrapComponentConfig({template:"{% block sw_extension_card_base_context_menu_actions %}\n    <sw-context-menu-item\n            v-if=\"this.extension.name === 'SwagPayPal'\"\n            :router-link=\"{ name: 'sw.settings.payment.overview' }\">\n        {{ $tc('sw-settings-payment.general.mainMenuItemGeneral') }}\n    </sw-context-menu-item>\n\n    <sw-context-menu-item\n            v-if=\"this.extension.name === 'SwagPayPal'\"\n            :router-link=\"{ name: 'swag.paypal.index' }\">\n        {{ $tc('sw-extension-store.component.sw-extension-card-base.contextMenu.config') }}\n    </sw-context-menu-item>\n\n    {% parent %}\n{% endblock %}\n"})}}]);
<template>
  <button
    v-if="!embed"
    class="payButton"
    @click="payWithPaystack"
  >
    <slot>Make Payment</slot>
  </button>
  <div
    v-else
    id="paystackEmbedContainer"
  />
</template>

<script type="text/javascript">
import { mapState, mapActions, mapGetters } from "vuex";
export default {
    props: {
        embed: {
            type: Boolean,
            default: false
        },
        paystackkey: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        amount: {
            type: Number,
            required: true
        },
        reference: {
            type: String,
            required: true
        },
        callback: {
            type: Function,
            required: true,
            default: function(response) {}
        },
        close: {
            type: Function,
            required: true,
            default: function() {}
        },
        metadata: {
            type: Object,
            default: function() { return {} }
        },
        currency: {
            type: String,
            default: 'NGN'
        },
        plan: {
            type: String,
            default: ''
        },
        quantity: {
            type: String,
            default: ''
        },
        subaccount: {
            type: String,
            default: ''
        },
        transactionCharge: {
            type: Number,
            default: 0
        },
        bearer: {
            type: String,
            default: ''
        }
    },
    data(){
        return {
        }
    },
    created() {
    },
    mounted() {
        if (this.embed) {
            this.payWithPaystack()
        }
    },
    methods: {
        ...mapActions("transactions", ["saveTransactions"]),
        customcallback: function(response) {
          let customdata = {
            source: "postad",
            amount: this.amount / 100
          };
          const transactionResponse = Object.assign(customdata, response);
          this.saveTransactions(response, this.ads);
          console.log(transactionResponse);
        },
        payWithPaystack() {
            const paystackOptions = {
                key: this.paystackkey,
                email: this.email,
                amount: this.amount,
                ref: this.reference,
                callback: this.customcallback,
                onClose: () => {
                    this.close()
                },
                metadata: this.metadata,
                currency: this.currency,
                plan: this.plan,
                quantity: this.quantity,
                subaccount: this.subaccount,
                transaction_charge: this.transaction_charge,
                bearer: this.bearer
            }

            if (this.embed) {
                paystackOptions.container = 'paystackEmbedContainer'
            }

            const handler = window.PaystackPop.setup(paystackOptions)
            if (!this.embed) {
                handler.openIframe()
            }
        }
    }
}
</script>


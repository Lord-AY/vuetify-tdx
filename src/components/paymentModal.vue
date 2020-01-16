<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <div class="modal-header">
                        <slot name="header">
                            {{ payment.paymentitemname }}
                        </slot>
                    </div>

                    <div class="modal-body">
                        <form action="">
                            <div class="form-group">
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Phone Number"
                                    v-model="phone"
                                />
                            </div>
                            <div
                                class="form-group"
                                v-show="payment.amount == '0'"
                            >
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Enter Amount"
                                    v-model="amount"
                                />
                            </div>
                            <div class="form-group">
                                <button
                                    class="btn btn-success"
                                    v-if="payment.amount == '0'"
                                    @click.prevent="sendPaymentRequest"
                                >
                                    Buy Airtime ({{ amount }})
                                </button>
                                <button
                                    class="btn btn-success"
                                    :class="btnDisabled ? 'disabled' : ''"
                                    v-else
                                    @click.prevent="sendPaymentRequest"
                                    :disabled="btnDisabled"
                                >
                                    Buy Airtime ({{ payment.amount }})
                                </button>
                            </div>
                        </form>
                    </div>

                    <div class="modal-footer">
                        <slot name="footer">
                            <button
                                class="modal-default-button btn btn-danger"
                                @click="$emit('close')"
                            >
                                cancel
                            </button>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: "paymentModal",
    data() {
        return {
            phone: null,
            amount: null,
            btnDisabled: true
        };
    },
    props: {
        payment: [Object, Array],
        user: [Object, Array]
    },
    methods: {
        sendPaymentRequest() {
            if (this.amount !== null) {
                const payload = {
                    phone: this.phone,
                    amount: this.amount,
                    paymentCode: this.payment.paymentCode,
                    customerId: "000000000" + this.user.id,
                };
                this.$emit("ValidPayment", payload);
            }
            const payload = {
                phone: this.phone,
                paymentCode: this.payment.paymentCode,
                customerId: "000000000" + this.user.id,
                amount: this.payment.amount,
            };
            this.$emit("ValidPayment", payload);
        },
        checkStringLength(string) {
            if(string.length < 10) {
                this.btnDisabled = true;
            } else if(string.length > 10) {
            this.btnDisabled = false;
            } else {
                this.btnDisabled = true;
            }
        }
    },
    watch: {
        phone: {
            handler: function(phone) {
                this.checkStringLength(phone);
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.disabled {
    cursor: not-allowed;
}
.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(53, 53, 53, 0.82);
    display: table;
    transition: opacity 0.3s ease;
}

.modal-wrapper {
    display: table-cell;
    vertical-align: middle;
}

.modal-container {
    width: 300px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
    margin-top: 0;
    color: #42b983;
}

.modal-body {
    margin: 20px 0;
}

.modal-default-button {
    float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
    opacity: 0;
}

.modal-leave-active {
    opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}
</style>

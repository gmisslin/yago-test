<template>
    <v-container>
        <div class="quote-main ">
            <div class="main-covers"> 
                <v-container class="text-center">
                    <v-row class="mb-6">
                        <h3>Your RC PRO main covers</h3>
                    </v-row> 
                    <v-row class="d-flex justify-space-around mb-6">
                        <v-card
                            class="mx-auto"
                            max-width="344"
                            outlined
                        >
                            <v-card-title>Pro Indemnity <v-icon color="black" dark >mdi-arrow-right</v-icon> {{proIndemnityAmount}}€</v-card-title>
                            <v-card-text>
                                <v-row class="d-flex justify-center">
                                    <!-- <input type="checkbox"  id="checkbox"  :value="proIndemnityAmount" v-model="form.proIndemnity" > -->
                                    <v-checkbox
                                    v-model="form.proIndemnity"
                                    id="a"
                                    label=""
                                    :false-value="0"
                                    :true-value="proIndemnityAmount"
                                    ></v-checkbox>
                                </v-row>
                            </v-card-text>
                        </v-card>

                        <v-card
                            class="mx-auto"
                            max-width="344"
                            outlined
                        >
                            <v-card-title>Public Liability <v-icon color="black" dark >mdi-arrow-right</v-icon> {{publicLiabilityAmount}}€</v-card-title>
                            <v-card-text>
                                <v-row class="d-flex justify-center">
                                    <v-checkbox
                                    v-model="form.publicLiability"
                                    id="b"
                                    :false-value="0"
                                    :true-value="publicLiabilityAmount"
                                    label=""
                                    ></v-checkbox>
                                </v-row>
                            </v-card-text>
                            
                        </v-card>

                    </v-row>
                </v-container>
            </div>

            <div class="additional-covers"> 
                <v-container>
                    <v-row  class="mb-6">
                        <h3>Additional covers</h3>
                    </v-row> 
                    <v-row class="d-flex flex-column mb-6">
                        <v-container>
                            <v-row class="mb-6">
                                <v-card
                                outlined
                                min-width="344"
                                >
                                    <v-card-text>
                                        <v-row class="d-flex justify-center">
                                            <v-col cols="2" class="d-flex align-self-center">
                                                <v-tooltip bottom>
                                                    <template v-slot:activator="{ on, attrs }">
                                                        <v-icon
                                                        color="primary"
                                                        dark
                                                        v-bind="attrs"
                                                        v-on="on"
                                                        >
                                                        mdi-information-outline
                                                        </v-icon>
                                                    </template>
                                                    <span> Objects that don't belong to you, and are entrusted to you. You are obviously liable for any damage to these goods. (ex: you break the super expensive computer that was provided to you as an IT consultant).</span>
                                                </v-tooltip>
                                            </v-col>
                                             <v-col cols="8" class="d-flex align-self-center">
                                                 Entrusted Object <v-icon color="black" dark >mdi-arrow-right</v-icon> {{entrustedObjectsAmount}}€
                                             </v-col>
                                            <v-col cols="2">
                                                <v-checkbox
                                                v-model="form.entrustedObject"
                                                :false-value="0"
                                                :true-value="entrustedObjectsAmount"
                                                ></v-checkbox>
                                            </v-col>
                                            
                                            
                                        </v-row>
                                    </v-card-text>
                                </v-card>
                            </v-row>
                            <v-row class="mb-6">
                                <v-card
                                outlined
                                min-width="344"
                                >
                                    <v-card-text>
                                        <v-row class="d-flex justify-center">
                                            <v-col cols="2" class="d-flex align-self-center">
                                                <v-tooltip bottom>
                                                    <template v-slot:activator="{ on, attrs }">
                                                        <v-icon
                                                        color="primary"
                                                        dark
                                                        v-bind="attrs"
                                                        v-on="on"
                                                        >
                                                        mdi-information-outline
                                                        </v-icon>
                                                    </template>
                                                    <span> Also known as legal insurance, is an insurance which facilitates access to law and justice by providing legal advice and covering legal costs of a dispute. (ex: a client asks you for a financial compensation for a mistake you made in your work and you consider it's absolutely not you fault considering the context and you thus want to hire a lawyer to defend you).</span>
                                                </v-tooltip>
                                            </v-col>
                                            <v-col cols="8" class="d-flex align-self-center">
                                                Legal Expense <v-icon color="black" dark >mdi-arrow-right</v-icon> {{legalExpensesAmount}}€
                                            </v-col>
                                            <v-col cols="2">
                                                <v-checkbox
                                                v-model="form.legalExpense"
                                                :false-value="0"
                                                :true-value="legalExpensesAmount"
                                                ></v-checkbox>
                                            </v-col>
                                        </v-row>
                                    </v-card-text>
                                </v-card>
                            </v-row>
                            <v-row  class="mb-6">
                                <v-card
                                outlined
                                min-width="344"
                                >
                                    <v-card-text>
                                        <v-row class="d-flex justify-center">
                                            <v-col cols="2" class="d-flex align-self-center">
                                                <v-tooltip bottom>
                                                    <template v-slot:activator="{ on, attrs }">
                                                        <v-icon
                                                        color="primary"
                                                        dark
                                                        v-bind="attrs"
                                                        v-on="on"
                                                        >
                                                        mdi-information-outline
                                                        </v-icon>
                                                    </template>
                                                    <span>Covers damage arising after delivery of or completion of work (ex: new machines recently installed at the client's office start a fire).</span>
                                                </v-tooltip>
                                            </v-col>
                                            <v-col cols="8" class="d-flex align-self-center">
                                                After Delivery <v-icon color="black" dark >mdi-arrow-right</v-icon> {{afterDeliveryAmount}}€
                                            </v-col>
                                            <v-col cols="2">
                                                <v-checkbox
                                                    v-model="form.afterDelivery"
                                                    :false-value="0"
                                                    :true-value="afterDeliveryAmount"
                                                ></v-checkbox>
                                            </v-col>
                                        </v-row>
                                    </v-card-text>
                                </v-card>
                            </v-row>
                        </v-container>
                    </v-row>
                    <v-row class="d-flex flex-column mb-6">
                        <v-row>
                            <v-slider
                            :tick-labels="ticksLabelsDeductible"
                            :max="2"
                            step="1"
                            ticks="always"
                            tick-size="3"
                            label="Deductible"
                            v-model="form.sliders.deductible"
                            ></v-slider>
                        </v-row>

                        <v-row>
                            <v-slider
                            :tick-labels="ticksLabelsCoverageCeil"
                            :max="1"
                            step="1"
                            :ticks="true"
                            tick-size="3"
                            label="Coverage ceil"
                            v-model="form.sliders.coverageCeil"
                            ></v-slider>
                        </v-row>
                    </v-row>
                </v-container>
            </div>

            <div class="total-quote">
                <v-row>
                    Total <v-icon color="black" dark >mdi-arrow-right</v-icon> {{total}}€
                </v-row>
            </div>
        </div>
  </v-container>
</template>

<script>
export default {
    name: 'QuoteMain',
    data: () => ({
        ticksLabelsDeductible: [
          'small',
          'medium',
          'large'
        ],
        ticksLabelsCoverageCeil: [
          'small',
          'large'
        ],
        form:{
            proIndemnity:0,
            publicLiability:0,
            entrustedObject:0,
            legalExpense:0,
            afterDelivery:0,
            sliders:{
                deductible:0,
                coverageCeil:1
            }
        }
    }),
    methods:{
        resetForm:function(){
            console.log('reset')
            this.form.proIndemnity = 0;
            this.form.publicLiability=0;
            this.form.entrustedObject=0;
            this.form.legalExpense=0;
            this.form.afterDelivery=0;
        }
    },
    computed: {
        total: function(){
            let total = 0;
            for (var prop in this.form) {
                if (Object.prototype.hasOwnProperty.call(this.form, prop)) {
                    total += (this.form[prop] && typeof this.form[prop] === "number") ? this.form[prop] : 0; 
                }
            }
            return total;
        },
        proIndemnityAmount:function(){
            return this.quoteParameters.grossPremiums.professionalIndemnity;
        },
        publicLiabilityAmount:function(){
            return this.quoteParameters.grossPremiums.publicLiability;
        },
        entrustedObjectsAmount:function(){
            return this.quoteParameters.grossPremiums.entrustedObjects;
        },
        legalExpensesAmount:function(){
            return this.quoteParameters.grossPremiums.legalExpenses;
        },
        afterDeliveryAmount:function(){
            return this.quoteParameters.grossPremiums.afterDelivery;
        }
    },
    props:{
      quoteParameters : Object
    },
    watch:{
        //When we update the slider, we need to call again the API and chaneg the deductible and coverageCeil parameters
        "form.sliders.deductible":function(val){
            this.$emit("updateDeductible", this.ticksLabelsDeductible[val]);
        },
        "form.sliders.coverageCeil":function(val){
            this.$emit("updateCoverageCeil", this.ticksLabelsCoverageCeil[val]);
        },
        //I reset the form when i call again the API because i couldn't manage to correctly update the checkbox values during the test
        quoteParameters: {
            handler() {
                this.resetForm();
            },
            deep: true
        }
    }
}
</script>

<style scoped>
</style>

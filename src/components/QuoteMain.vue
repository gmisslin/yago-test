<template>
  <v-container>
    <div class="quote-main">
      <v-card class="mx-auto" outlined>
        <v-card-title>Please choose your covers</v-card-title>
        <v-card-text>
          <div class="main-covers">
            <v-container class="text-center">
              <v-row class="mb-6 d-flex justify-center">
                <h3>Your RC PRO main covers</h3>
              </v-row>
              <v-row class="d-flex justify-space-around mb-6">
                <v-card class="mx-auto" max-width="344" outlined>
                  <v-card-title
                    >Pro Indemnity
                    <v-icon color="black" dark>mdi-arrow-right</v-icon>
                    {{ formatNumber(proIndemnityAmount) }}€</v-card-title
                  >
                  <v-card-text>
                    <v-row class="d-flex justify-center">
                      <v-checkbox
                        v-model="form.proIndemnityAmount"
                        id="a"
                        label=""
                      ></v-checkbox>
                    </v-row>
                  </v-card-text>
                </v-card>

                <v-card class="mx-auto" max-width="344" outlined>
                  <v-card-title
                    >Public Liability
                    <v-icon color="black" dark>mdi-arrow-right</v-icon>
                    {{ formatNumber(publicLiabilityAmount) }}€</v-card-title
                  >
                  <v-card-text>
                    <v-row class="d-flex justify-center">
                      <v-checkbox
                        v-model="form.publicLiabilityAmount"
                        id="b"
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
              <v-row class="mb-6 d-flex justify-center">
                <h3>Additional covers</h3>
              </v-row>
              <v-row class="d-flex flex-column mb-6">
                <v-container>
                  <v-row class="mb-6 d-flex justify-center">
                    <v-card outlined min-width="344">
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
                              <span>
                                Objects that don't belong to you, and are
                                entrusted to you. You are obviously liable for
                                any damage to these goods. (ex: you break the
                                super expensive computer that was provided to
                                you as an IT consultant).</span
                              >
                            </v-tooltip>
                          </v-col>
                          <v-col cols="8" class="d-flex align-self-center">
                            Entrusted Object
                            <v-icon color="black" dark>mdi-arrow-right</v-icon>
                            {{ formatNumber(entrustedObjectsAmount) }}€
                          </v-col>
                          <v-col cols="2">
                            <v-checkbox
                              v-model="form.entrustedObjectsAmount"
                            ></v-checkbox>
                          </v-col>
                        </v-row>
                      </v-card-text>
                    </v-card>
                  </v-row>
                  <v-row class="mb-6 d-flex justify-center">
                    <v-card outlined min-width="344">
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
                              <span>
                                Also known as legal insurance, is an insurance
                                which facilitates access to law and justice by
                                providing legal advice and covering legal costs
                                of a dispute. (ex: a client asks you for a
                                financial compensation for a mistake you made in
                                your work and you consider it's absolutely not
                                you fault considering the context and you thus
                                want to hire a lawyer to defend you).</span
                              >
                            </v-tooltip>
                          </v-col>
                          <v-col cols="8" class="d-flex align-self-center">
                            Legal Expense
                            <v-icon color="black" dark>mdi-arrow-right</v-icon>
                            {{ formatNumber(legalExpensesAmount) }}€
                          </v-col>
                          <v-col cols="2">
                            <v-checkbox
                              v-model="form.legalExpensesAmount"
                            ></v-checkbox>
                          </v-col>
                        </v-row>
                      </v-card-text>
                    </v-card>
                  </v-row>
                  <v-row class="mb-6 d-flex justify-center">
                    <v-card outlined min-width="344">
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
                              <span
                                >Covers damage arising after delivery of or
                                completion of work (ex: new machines recently
                                installed at the client's office start a
                                fire).</span
                              >
                            </v-tooltip>
                          </v-col>
                          <v-col cols="8" class="d-flex align-self-center">
                            After Delivery
                            <v-icon color="black" dark>mdi-arrow-right</v-icon>
                            {{ formatNumber(afterDeliveryAmount) }}€
                          </v-col>
                          <v-col cols="2">
                            <v-checkbox
                              v-model="form.afterDeliveryAmount"
                            ></v-checkbox>
                          </v-col>
                        </v-row>
                      </v-card-text>
                    </v-card>
                  </v-row>
                </v-container>
              </v-row>
              <v-row class="d-flex flex-column mb-6">
                <v-container>
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
                </v-container>
              </v-row>
            </v-container>
          </div>

          <div class="total-quote">
            <v-row class="mb-6 d-flex justify-center">
              <h1>
                Total <v-icon color="black" large dark>mdi-arrow-right</v-icon>
                {{ total }}€
              </h1>
            </v-row>
          </div>
        </v-card-text>
      </v-card>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "QuoteMain",
  data: () => ({
    ticksLabelsDeductible: ["small", "medium", "large"],
    ticksLabelsCoverageCeil: ["small", "large"],
    form: {
      proIndemnityAmount: false,
      publicLiabilityAmount: false,
      entrustedObjectsAmount: false,
      legalExpensesAmount: false,
      afterDeliveryAmount: false,
      sliders: {
        deductible: 0,
        coverageCeil: 1,
      },
    },
  }),
  methods: {
    formatNumber:function(number){
      return Intl.NumberFormat("fr-FR").format(number);
    }
  },
  computed: {
    total: function () {
      let total = 0;
      for (var prop in this.form) {
        if (Object.prototype.hasOwnProperty.call(this.form, prop)) {
          total +=
            this.form[prop] && !!this.form[prop] && this[prop] ? this[prop] : 0;
        }
      }
      return this.formatNumber(total);
    },
    proIndemnityAmount: function () {
      return this.quoteParameters.grossPremiums.professionalIndemnity;
    },
    publicLiabilityAmount: function () {
      return this.quoteParameters.grossPremiums.publicLiability;
    },
    entrustedObjectsAmount: function () {
      return this.quoteParameters.grossPremiums.entrustedObjects;
    },
    legalExpensesAmount: function () {
      return this.quoteParameters.grossPremiums.legalExpenses;
    },
    afterDeliveryAmount: function () {
      return this.quoteParameters.grossPremiums.afterDelivery;
    },
  },
  props: {
    quoteParameters: Object,
  },
  watch: {
    //When we update the slider, we need to call again the API and change the deductible and coverageCeil parameters
    "form.sliders.deductible": function (val) {
      this.$emit("updateDeductible", this.ticksLabelsDeductible[val]);
    },
    "form.sliders.coverageCeil": function (val) {
      this.$emit("updateCoverageCeil", this.ticksLabelsCoverageCeil[val]);
    },
  },
};
</script>

<style scoped></style>

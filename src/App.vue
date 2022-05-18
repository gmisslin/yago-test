<template>
  <v-app>
    <v-app-bar
      app
      color="#02504b"
      dark
    >
      YAGO - Frontend technical challenge
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row class="text-center">
          <v-col cols="12">
            <v-btn
              v-if="!callQuote"
              elevation="2"
              @click="getCustomerInfo"
            > Get my quote ! </v-btn>
          </v-col>
        </v-row>
        <v-row v-if="callQuote">
          <QuoteMain v-if="quoteParameters.available" :quoteParameters="quoteParameters" @updateDeductible="updateDeductible"  @updateCoverageCeil="updateCoverageCeil"></QuoteMain>
          <p v-else>We can't purchase with your profile, sorry :(</p>
        </v-row>
        
      </v-container>
     
    </v-main>
  </v-app>
</template>

<script>
import QuoteMain from './components/QuoteMain';

export default {
  name: 'App',
  data() {
    return {
      callQuote:false,
      quoteParameters:{},
      specialParams:{
        deductibleFormula : "small",
        coverageCeilingFormula:"large"
      }
    }
  },
  components: {
    QuoteMain,
  },
  methods:{
    getCustomerInfo:function() {
      this.$axios.post('https://staging-gtw.seraphin.be/quotes/professional-liability',{
          "annualRevenue": 80000,
          "enterpriseNumber": "0649885171",
          "legalName": "example SA",
          "naturalPerson": true,
          "nacebelCodes": ["62010", "62020", "62030", "62090", "63110"],
          "deductibleFormula": this.specialParams.deductibleFormula,
          "coverageCeilingFormula": this.specialParams.coverageCeilingFormula,
        } ,{
        headers: {
          'X-Api-Key': 'fABF1NGkfn5fpHuJHrbvG3niQX6A1CO53ftF9ASD',
          'Content-Type': 'application/json',
        }
      })
      .then((response) => {
        this.callQuote = true;
        if(response.data){
          this.quoteParameters = response?.data.data;
        }
        
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    updateDeductible:function(val){
      this.specialParams.deductibleFormula = val;
    },
    updateCoverageCeil:function(val){
      this.specialParams.coverageCeilingFormula = val;
    }
  },
  watch:{
    specialParams: {
      handler() {
        this.getCustomerInfo();
      },
      deep: true
    }
  }
};
</script>

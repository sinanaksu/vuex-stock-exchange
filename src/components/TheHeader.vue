<template>
<div>
<div class="brown lighten-5 elevation-1" >
  <v-container>
    <v-row>
      <v-col cols="12" class="text-h5 orange--text text--darken-4">
        <span transition="scale-transition" v-if="pageType === 'stock'">Stock Markets</span>
        <span transition="scale-transition" v-if="pageType === 'forex'">Forex (FX)</span>
        <span transition="scale-transition" v-if="pageType === 'crypto'">Crypto Currencies</span>
      </v-col>
    </v-row>
  </v-container>
</div>
  <v-container>
    <v-row>
      <v-col cols="12 mb-4 mt-4" class="">
          <v-row >
            <v-col xs="12" sm="12" md="6" lg="2" v-for="i in 6" :key="i" role=button @click="console.log('ds')">
              <v-card hover>
                <v-card-text>
                  <div>Day</div>
                  <div class="text-h5 text--primary">
                    AMAZON {{i}}
                  </div>
                  <div class="text--primary">
                    Open: 11  Close:15
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
      </v-col>
    </v-row>
  </v-container>

</div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';

export default {
  name: "TheHeader",
  data(){
    return {
      
    }
  },
  computed: {
		...mapState(['pageType','searchData']),
	},
  methods: {
  ...mapActions(['searchSymbol']),
  ...mapMutations(['SET_PAGE_TYPE', 'SET_SEARCH_DATA','SET_SEARCH_DATA']),
  }
  
};
</script>
<template>
  <v-app>
    <v-main>
      <router-view :key="$route.fullPath" />
    </v-main>
  </v-app>
</template>
<script>
import { mapState, mapActions, mapMutations } from 'vuex';

export default {
  name: "App",
  data() {
    return {
      descriptionLimit: 60,
      searchSelect: null,
      search: null,
      items: []
    }
  },
  computed: {
		...mapState(['pageType','selectSymbol','searchLoading','searchNames','searchData']),
	},
  methods: {
  ...mapActions(['searchSymbol']),
  ...mapMutations(['SET_PAGE_TYPE', 'SET_SEARCH_DATA','SET_SELECT_SYMBOL','SET_SEARCH_LOADING']),
    getPage(page){
      this.SET_PAGE_TYPE(page)
      this.$router.push({ path: '/'}).catch(()=>{})
    },
    searchStart(){
      if(this.search === null) { return; }
      if(this.search.length > 2) { this.searchSymbol(this.search);}
    }
  },
  watch: {
  searchSelect (val) {
      let index = this.searchData.findIndex(el => el["2. name"] === val)
      this.SET_SELECT_SYMBOL(this.searchData[index]);
      this.$router.push({ path: '/symbol/' + this.searchData[index]["1. symbol"] }).catch(()=>{})
      this.search = null
    }
},
};
</script>
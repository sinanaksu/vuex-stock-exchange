<template>
<div>
  <TheHeader />


</div>
</template>

<script>
import { mapGetters, mapState, mapActions, mapMutations } from 'vuex';

import TheHeader from "../components/TheHeader";

export default {
  name: "Home",
  data() {
    return {
      text: "",
      symbol: this.$route.params.symbol,
    }
  },
  components: {
    TheHeader
  },
  computed: {
		...mapGetters(['searchTypeMovie', 'favNumber']),
		...mapState(['pageType','selectSymbol']),
	},
  methods: {
  ...mapActions(['searchSymbol','csvtest']),
  ...mapMutations(['SET_PAGE_TYPE', 'SET_SEARCH_DATA','SET_SEARCH_DATA']),
  }
};
</script>

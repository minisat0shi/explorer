<template>
  <footer>
    <div class="d-md-flex container mx-auto py-4 footer-items">
      <div class="col">
        <h4 v-text="$t('footer_source_code')" />
        <ul>
          <li
            v-for="sourceCodeItem in sourceCodeList"
            :key="sourceCodeItem.title"
          >
            <a :href="sourceCodeItem.url" v-text="sourceCodeItem.title" />
          </li>
        </ul>
      </div>
      <div class="col">
        <h4>Resources</h4>
        <ul>
          <li v-for="resource in resources" :key="resource.title">
            <a :href="resource.url" v-text="resource.title" />
          </li>
        </ul>
      </div>
      <div class="col">
        <h4 v-text="$t('footer_connect')"></h4>
        <ul>
          <li v-for="connectItem in connectList" :key="connectItem.title">
            <a :href="connectItem.url" v-text="connectItem.title" />
          </li>
        </ul>
      </div>
    </div>

    <!-- Copy right -->
    <div class="copy-right bg-dark text-white">
      <div
        class="container p-3 d-flex flex-column flex-md-row justify-content-between"
      >
        <p class="mb-0 my-2">
          Bitcoincash Explorer © {{ new Date().getFullYear() }}
          <span class="mx-1">|</span> Made by
          <a class="mr-2" href="https://salemkode.com/">SalemKode</a>
        </p>
        <a href="https://explorer-flipstarter.salemkode.com/" class="mb-0 my-2">
          Funded by Bitcoin Cash Community
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const sourceCodeList = [
	{
		title: "Explorer",
		url: "https://github.com/salemkode/explorer",
	},
	{
		title: "Chaingraph",
		url: "http://chaingraph.cash/",
	},
];

const resources = [
	{
		title: "CashToken",
		url: "https://github.com/bitjson/cashtokens",
	},
	{
		title: "BCMR",
		url: "https://github.com/bitjson/chip-bcmr",
	},
    {
        title: "CashToken Ecosystem",
        url: "https://minisatoshi.cash/ecosystem?filter=CashToken",
    },
];

const connectList = [
	{
		title: "Explorer developer",
		url: "https://t.me/salemkode",
	},
	{
		title: "Bitcoin cash",
		url: "https://t.me/bchchannel",
	},
	{
		title: "CashToken",
		url: "https://t.me/cashtoken_devs",
	},
	{
		title: "Chaingraph dev",
		url: "https://t.me/chaingraph_dev",
	},
];
</script>

<style scoped>
.footer-items > * {
  margin-top: 20px;
}

footer a {
  text-decoration: none;
  color: inherit;
}

footer ul {
  list-style: none;
  padding: 10px 0 0 0;
}

footer ul li {
  margin-top: 5px;
}

footer ul li a:hover {
  color: var(--bs-gray);
}
</style>

<template>
  <div class="home">
    <div class="w3-container">
      <h1 class="intro w3-jumbo w3-text-amber">RichSplash</h1>
      <form class="w3-container">
        <label>Image Search using Pixabay API</label>
        <input class="w3-input w3-border-0 w3-blue-grey w3-animate-input" style="width: 50%;" type="text" />
      </form>
    </div>

    <!--    categories nav-->
    <div class="w3-bar w3-blue-gray w3-margin-top text-uppercase w3-padding-16">
      <a href="#" class="w3-bar-item w3-button w3-mobile w3-text-white w3-hover-amber">fashion</a>
      <a href="#" class="w3-bar-item w3-button w3-mobile w3-text-white w3-hover-amber">nature</a>
      <a href="#" class="w3-bar-item w3-button w3-mobile w3-text-white w3-hover-amber">backgrounds</a>
      <a href="#" class="w3-bar-item w3-button w3-mobile w3-text-white w3-hover-amber">science</a>
      <a href="#" class="w3-bar-item w3-button w3-mobile w3-text-white w3-hover-amber">education</a>
      <a href="#" class="w3-bar-item w3-button w3-mobile w3-text-white w3-hover-amber">people</a>
      <a href="#" class="w3-bar-item w3-button w3-mobile w3-text-white w3-hover-amber">feelings</a>
      <a href="#" class="w3-bar-item w3-button w3-mobile w3-text-white w3-hover-amber">religion</a>
      <a href="#" class="w3-bar-item w3-button w3-mobile w3-text-white w3-hover-amber">health</a>
      <a href="#" class="w3-bar-item w3-button w3-mobile w3-text-white w3-hover-amber">places</a>
      <a href="#" class="w3-bar-item w3-button w3-mobile w3-text-white w3-hover-amber">animals</a>
    </div>

    <!--    images result-->
    <div class="w3-container w3-padding-32">
      <div class="w3-row-padding">
        <div class="w3-col m4 l3">
          <div class="w3-card-4">
            <img src="img_snowtops.jpg" alt="Alps" />
            <div class="w3-container w3-center">
              <p>The Italian / Austrian Alps</p>
            </div>
          </div>
        </div>
        <div class="w3-col m4 l3">
          <div class="w3-card-4">
            <img src="img_snowtops.jpg" alt="Alps" />
            <div class="w3-container w3-center">
              <p>The Italian / Austrian Alps</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    // HelloWorld
  }
};
</script>

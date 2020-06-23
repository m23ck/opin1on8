<template>
  <div>
    <div>
      <b-card title="Card title" sub-title="Card subtitle">
        <b-card-text>
          Some quick example text to build on the
          <em>card title</em> and make up the bulk of the card's
          content.
        </b-card-text>

        <b-card-text>A second paragraph of text in the card.</b-card-text>

        <a href="#" class="card-link">Card link</a>
        <b-link href="#" class="card-link">Another link</b-link>
        <b-form-rating v-model="value" variant="warning" class="mb-2"></b-form-rating>
        <p class="mt-2">Value: {{ value }}</p>
      </b-card>
    </div>
  </div>
</template>


<script>
export default {
  name: "EmployerCard",
  props: ["employer"],
  methods: {},
  data() {
      return {
        value: 3
      }
    }
};
</script>


<style scoped>
</style>
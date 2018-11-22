<template>
    <div class="container">
        <vue-event-calendar :title="title" :events="demoEvents" @dayChanged="handleDayChange"></vue-event-calendar>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                demoEvents: [
                    {
                    date: '2016/11/12', // Required
                    title: 'Foo' // Required
                    },
                    {
                    date: '2016/12/15',
                    title: 'Bar',
                    desc: 'description',
                    customClass: 'disabled highlight' // Custom classes to an calendar cell
                }
                ]
            }
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .container {
        margin-top:10px;
    }
</style>

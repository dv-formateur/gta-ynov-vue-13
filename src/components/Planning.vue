<template>
    <div class="container">
        <h1>Planning</h1>
        <form class="form-inline">
            <div  class="form-group">
                <label for="datebegin">Date début</label>
                <input v-model="datebegin" class="form-control" type="date" id="datebegin">
                <label for="dateEnded" class="col-form-label">Date début</label>
                <input v-model="dateEnded" class="form-control" type="date" value="2011-08-19" id="dateEnded">
            </div>
            <button type="button" class="btn btn-success">Success</button>
        </form>
        <!--<vue-event-calendar :title="title" :events="demoEvents"-->
        <!--@month-changed="handleMonthChanged" @dayChanged="handleDayChange"></vue-event-calendar>-->
    </div>
</template>
<script>
    export default {
        data () {
            return {
                
            }
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1 {
        margin-top:30px;
        margin-bottom:30px;
    }
    label{
        margin-right:25px;
        margin-left:25px;
    }
    button{
        margin-left:30px;
    }
</style>

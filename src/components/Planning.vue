<template>
    <div class="container">
        <div class="row justify-content-between">
            <h1>Planning
                <switches v-model="enabled" theme="bulma" color="blue"></switches>
            </h1>
        </div>
        <div v-if="!enabled">
            <button type="button" class="btn btn-outline-warning" @click="filterAbsences">Absences</button>
            <button type="button" class="btn btn-outline-info" @click="filterHoraires">Horaires</button>
            <button type="button" class="btn btn-outline-success" @click="getAllEvents">Tout afficher</button>
            <form class="form-inline">
                <div  class="form-group">
                    <label for="datebegin">De</label>
                    <input v-model="datebegin" class="form-control" type="date" id="datebegin">
                    <label for="dateEnded" class="col-form-label">À</label>
                    <input v-model="dateEnded" class="form-control" type="date" value="2011-08-19" id="dateEnded">
                    <button type="button" @click="validPeriod" class="btn btn-primary btn-sm">Valider période</button>
                </div>
            </form>
            <div class="row col-md-12">
                <div v-for="event in events" class="col-md-4 card">
                    <div class="card-header">
                        {{event.name}}
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">{{event.libelle}}:</h5>
                        <p class="card-text">Date Début:  {{event.debut}}</p>
                        <p class="card-text">Date Fin:  {{event.fin}}</p>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="enabled">
            <div class="row">
                <div class="col-md-2"  @click="backCalendar">
                    <svg id="i-chevron-left" viewBox="0 0 32 32" width="15" height="15" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                        <path d="M20 30 L8 16 20 2" />
                    </svg>
                </div>
                <div class="col-md-8">
                    <button type="button" class="btn btn-outline-secondary btn-sm" @click="viewCalendarWeek">Semaine</button>
                    <button type="button" class="btn btn-outline-secondary btn-sm" @click="viewCalendarDay">Jour</button>
                    <button type="button" class="btn btn-outline-secondary btn-sm" @click="viewCalendarMonth">Mois</button>
                </div>
                <div class="col-md-2" @click="nextCalendar">
                    <svg id="i-chevron-right" viewBox="0 0 32 32" width="15" height="15" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                        <path d="M12 30 L24 16 15 2" />
                    </svg>
                </div>
            </div>
            <calendar ref="calendar"
                        :calendars="calendarList"
                      :schedules="scheduleList"
                      :view="view"
                      :taskView="taskView"
                      :scheduleView="scheduleView"
                      :theme="theme"
                      :week="week"
                      :month="month"
                      :timezones="timezones"
                      :disableDblClick="disableDblClick"
                      :isReadOnly="isReadOnly"
                      :template="template"
                      :useCreationPopup="useCreationPopup"
                      :useDetailPopup="useDetailPopup"style="height: 800px;"/>
            <!--<div id="calendar" style="height: 800px;"></div>-->
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                // Calendar variable
                actualMonth:"",
                view: 'month',
                taskView: false,
                scheduleView: ['allday'],
                theme: {
                    'month.moreView.border': '1px solid #d5d5d5',
                    'month.moreView.boxShadow': '0 2px 6px 0 rgba(0, 0, 0, 0.1)',
                    'month.moreView.backgroundColor': 'white',
                    'month.moreView.paddingBottom': '17px',
                    'month.moreViewTitle.height': '44px',
                    'month.moreViewTitle.marginBottom': '12px',
                    'month.moreViewTitle.backgroundColor': 'white',
                    'month.moreViewTitle.borderBottom': 'none',
                    'month.moreViewTitle.padding': '12px 17px 0 17px',
                    'month.moreViewList.padding': '0 17px 17px 17px',
                },
                week: {
                    narrowWeekend: true,
                    showTimezoneCollapseButton: true,
                    timezonesCollapsed: false
                },
                month: {
                    visibleWeeksCount: 6,
                    startDayOfWeek: 1
                },
                timezones: [{
                    timezoneOffset: 540,
                    displayLabel: 'GMT+09:00',
                    tooltip: 'Seoul'
                }, {
                    timezoneOffset: -420,
                    displayLabel: 'GMT-08:00',
                    tooltip: 'Los Angeles'
                }],
                disableDblClick: true,
                isReadOnly: false,
                template: {
                    milestone: function(schedule) {
                        return `<span style="color:red;">${schedule.title}</span>`;
                    },
                    milestoneTitle: function() {
                        return 'MILESTONE';
                    },
                },
                useCreationPopup: true,
                useDetailPopup: false,
                calendarList: [
                    {
                        id: '0',
                        name: 'home'
                    },
                    {
                        id: '1',
                        name: 'office'
                    },
                    {
                        id: '2',
                        name: 'rest'
                    }
                ],
                scheduleList: [
                ],
                // Personal variable
                datebegin: "",
                dateEnded: "",
                tempTab:[],
                events: [],
                demoEvents :[],
                enabled:false
            }
        },
        methods: {
            getAllEvents(callback){
                this.events=[];
                this.scheduleList=[];
                // this.$http.get('http://localhost:3000/events/validate', {
                this.$http.get('https://apigtaproject.herokuapp.com/events/validate', {
                }).then(response => {
                    this.events=response.data.events;
                    response.data.events.forEach((evt)=>{
                        let scheduleColor="";
                        if(evt.intitule_type==="Absence"){
                            scheduleColor="#ff7f50";
                        }else if(evt.intitule_type==="Horaire"){
                            scheduleColor="#A2DF35";
                        }

                        this.scheduleList.push({id:evt.this,calendarId:evt.id,title:evt.intitule_type+" - "+evt.name,category:'time',
                            dueDateClass:'',start:evt.debut,end:evt.fin,bgColor:scheduleColor})
                    });
                    if(callback){
                        callback()
                    }
                });
            },
            filterAbsences(){
                this.getAllEvents(()=>{
                    this.events = this.events.filter(evtInt => evtInt.intitule_type==="Absence");
                });
            },
            filterHoraires(){
                this.getAllEvents(()=>{
                    this.events = this.events.filter(evtInt => evtInt.intitule_type==="Horaire");
                });
            },
            validPeriod(){
                let dateDebutForm = new Date(this.datebegin);
                let dateFinForm = new Date(this.dateEnded);
                this.events.forEach((eventDate) =>{
                    if(new Date(eventDate.debut) < dateDebutForm && new Date(eventDate.fin) < dateFinForm){
                        this.events = this.events.filter(eventDate => new Date(eventDate.debut) >= dateDebutForm);
                    }
                });
            },
            obtainMonth(){
                let allMonthInString=["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre",
                "Octobre","Novembre","Décembre"];
                this.actualMonth=allMonthInString[new Date().getMonth()];
            },
            nextCalendar () {
                this.$refs.calendar.invoke('next');
                this.nameMonth=this.$refs.calendar.invoke('getDateRangeStart').toUTCString()
            },
            backCalendar () {
                this.$refs.calendar.invoke('prev');
                this.nameMonth=this.$refs.calendar.invoke('getDateRangeStart').toUTCString()
            },
            viewCalendarDay () {
                this.$refs.calendar.invoke('changeView', 'day', 'true')
            },
            viewCalendarWeek () {
                this.$refs.calendar.invoke('changeView', 'week', 'true')
            },
            viewCalendarMonth () {
                this.$refs.calendar.invoke('changeView', 'month', 'true')
            }
        },
        beforeMount(){
            this.obtainMonth();
            this.getAllEvents();
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    h1 {
        padding-left: 45%;

        margin-top:25px;
    }
    label{
        margin-right:25px;
        margin-left:25px;
    }
    button{
        margin-left:30px;
        margin-bottom:10px;
    }
    .card {
        margin-top: 25px;
    }
    img{
        margin-left:10px;
        width:20px;
        height:20px;
    }
</style>

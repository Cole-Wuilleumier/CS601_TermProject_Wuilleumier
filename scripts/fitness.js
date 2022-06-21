/**
 * Fitness:
 * This Vue component works with the fitness.html page.
 * It fetches data from an api and passes it to the view.
 * It utilizes Chart.js to display the data in a readable format.
 */

const app = new Vue({
    el: '#fitnessApp',
    data: {
        showHeartrate:true,
        showSleep: false,
        showSteps: false,
        heartrateData: [{
            "Date":"Loading Data...",
            "Resting Heart Rate":"Loading Data..."
        }],
        sleepData:[{
            "Date":"May 1st",
            "Sleep":"9 hrs",
            "Stress":50
        }],
        stressData:[{
            "Date":"May 1st",
            "Stress":30
        }],
        bodyBatteryData:[{
            "Date":"May 1st",
            "Body Battery":50
        }],
        stepsData:[{
            "Date":"May 1st",
            "Actual":5000,
            "Goal": 5000
        }],

    },

    methods: {
        getHeartRate: function(){
            async function getData() {
                return await fetch('https://health-data-colew.netlify.app/.netlify/functions/api/resting_heart_rate')
                .then(response => response.json())
                .catch((e)=>console.log(e));
            }

            getData().then(data => {
                const labels = data.resting_heart_rate.map((obj)=> obj.Date);
                const heartRateData = data.resting_heart_rate.map((obj)=> obj["Resting Heart Rate"])

                console.log(data)

                const chart_data = {
                    labels: labels,
                    datasets: [{
                    label: 'Average Resting Heartrate',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data:  heartRateData,
                    }]
                };

                const config = {
                    type: 'bar',
                    data: chart_data,
                    options: {}
                };

                const myChart = new Chart(
                    document.getElementById('heartRateChart'),
                    config
                );

                this.heartrateData = data.resting_heart_rate;
            });
        },
        getSleep: function(){
            async function getSleepData() {
                return await fetch('https://health-data-colew.netlify.app/.netlify/functions/api/sleep')
                .then(response => response.json())
                .catch((e)=>console.log(e));
            }

            async function getStressData() {
                return await fetch('https://health-data-colew.netlify.app/.netlify/functions/api/stress')
                .then(response => response.json())
                .catch((e)=>console.log(e));
            }

            const sleepData = getSleepData().then(data => data);
            const stressData = getStressData().then(data => data);

            Promise.all([sleepData, stressData])
                .then(([sleep, stress]) =>{
                    sleep.sleep.forEach((element, i)=> {
                        stress.stress.forEach(element2 =>{
                            if(element.Date == element2.Date){
                                sleep.sleep[i].Stress = element2.Stress;
                            }
                        });
                    });



                    const labels = stress.stress.map((obj)=> obj.Date);
                    const heartRateData = stress.stress.map((obj)=> obj["Stress"])

                    const chart_data = {
                        labels: labels,
                        datasets: [{
                        label: 'Stress Level',
                        backgroundColor: 'rgb(255, 99, 132)',
                        borderColor: 'rgb(255, 99, 132)',
                        data:  heartRateData,
                        }]
                    };

                    const config = {
                        type: 'bar',
                        data: chart_data,
                        options: {}
                    };

                    const myChart = new Chart(
                        document.getElementById('stressChart'),
                        config
                    );


                    this.sleepData = sleep.sleep;
                });

        },
        getSteps: function(){
            async function getData() {
                return await fetch('https://health-data-colew.netlify.app/.netlify/functions/api/steps')
                .then(response => response.json())
                .catch((e)=>console.log(e));
            }

            getData().then(data => {
                const labels = data.steps.map((obj)=> obj.Date);
                const stepsActual = data.steps.map((obj)=> obj["Actual"]);
                const stepsGoal = data.steps.map((obj)=> obj["Goal"]);
                

                console.log(data)

                const chart_data = {
                    labels: labels,
                    datasets: [{
                    label: 'Actual Steps',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data:  stepsActual,
                    },
                    {
                    label: 'Goal Steps',
                    backgroundColor: 'rgb(30, 99, 255)',
                    borderColor: 'rgb(30, 99, 255)',
                    data:  stepsGoal,
                    }]
                };

                const config = {
                    type: 'bar',
                    data: chart_data,
                    options: {}
                };

                const myChart = new Chart(
                    document.getElementById('stepsChart'),
                    config
                );

                this.stepsData = data.steps;
            });
        },
        showHeartRateFunc: function(){
            this.showHeartrate = true;
            this.showSleep = false;
            this.showSteps = false;
        },
        showSleepStressFunc: function(){
            this.showHeartrate = false;
            this.showSleep = true;
            this.showSteps = false;
        },
        showStepsFunc: function(){
            console.log("Hello steps")
            this.showHeartrate = false;
            this.showSleep = false;
            this.showSteps = true;
        }
    },
    beforeMount(){
        this.getHeartRate()
        this.getSleep()
        this.getSteps()
    }
    });
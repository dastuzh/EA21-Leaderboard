/*!
 * Start Bootstrap - Bare v4.3.0 (https://startbootstrap.com/template/bare)
 * Copyright 2013-2021 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-bare/blob/master/LICENSE)
 */
// This file is intentionally blank
// Use this file to add JavaScript to your project

var app = new Vue({
    el: '#app',
    data: {
        students: [
            ...students,
            {
                "repository": "Postgres (8 threads)",
                "preprocessing time (ms)": "0",
                "execution time (ms)": "137438",
                "submission time": "01/05/2021 00:00:00",
                "update time": "10/05/2021 12:44:47",
                "timestamp": "1620546287",
                "facebook-triangle-count": 9505,
                "wiki-triangle-count": 2188,
                "enron-triangle-count": 14279,
                "twitter-triangle-count": 15111,
                "facebook-triangle-full": 13651,
                "wiki-triangle-full": 2457,
                "enron-triangle-full": 15792,
                "twitter-triangle-full": 19339,
                "facebook-1-path-count": 43,
                "wiki-1-path-count": 30,
                "enron-1-path-count": 60,
                "twitter-1-path-count": 145,
                "facebook-1-path-full": 87,
                "wiki-1-path-full": 54,
                "enron-1-path-full": 186,
                "twitter-1-path-full": 656,
                "facebook-2-path-count": 833,
                "wiki-2-path-count": 187,
                "enron-2-path-count": 804,
                "twitter-2-path-count": 930,
                "facebook-2-path-full": 5905,
                "wiki-2-path-full": 1382,
                "enron-2-path-full": 11540,
                "twitter-2-path-full": 15295,
                "query1": 1891,
                "query2": 1991,
                "query3": 812,
                "query4": 756,
                "query5": 1529
            },
            {
                "repository": "Postgres (Sequential)",
                "preprocessing time (ms)": "0",
                "execution time (ms)": "258672",
                "submission time": "01/05/2021 00:00:00",
                "update time": "10/05/2021 12:44:47",
                "timestamp": "1620546287",
                "facebook-triangle-count": 9546,
                "wiki-triangle-count": 2206,
                "enron-triangle-count": 25649,
                "twitter-triangle-count": 44403,
                "facebook-triangle-full": 13660,
                "wiki-triangle-full": 2482,
                "enron-triangle-full": 27598,
                "twitter-triangle-full": 50720,
                "facebook-1-path-count": 43,
                "wiki-1-path-count": 30,
                "enron-1-path-count": 96,
                "twitter-1-path-count": 330,
                "facebook-1-path-full": 88,
                "wiki-1-path-full": 55,
                "enron-1-path-full": 200,
                "twitter-1-path-full": 663,
                "facebook-2-path-count": 819,
                "wiki-2-path-count": 188,
                "enron-2-path-count": 1574,
                "twitter-2-path-count": 2796,
                "facebook-2-path-full": 5920,
                "wiki-2-path-full": 1369,
                "enron-2-path-full": 17704,
                "twitter-2-path-full": 24880,
                "query1": 7013,
                "query2": 7560,
                "query3": 2473,
                "query4": 2435,
                "query5": 6172
            },
        ],
        last_update_time,
        snap_queries: ["triangle-full", "triangle-count", "1-path-full", "1-path-count", "2-path-full", "2-path-count"],
        snap_datasets: ["facebook", "twitter", "wiki", "enron"],
        cyclic_queries: ["facebook-triangle-full", "facebook-triangle-count", "twitter-triangle-full", "twitter-triangle-count", "wiki-triangle-full", "wiki-triangle-count", "enron-triangle-full", "enron-triangle-count", ],
    },
    computed: {
        formatted_students: function() {
            const result = this.students.sort((a,b) => {
                return a['execution time (ms)'] - b['execution time (ms)']
            }).map(s => {
                if (s.repository.startsWith("Postgres")) {
                    return {
                        ...s,
                        ['preprocessing time (ms)']: "N/A",
                        ['execution time (ms)']: this.numberWithCommas(s['execution time (ms)']),
                        cyclic_execution: this.numberWithCommas(this.cyclic_queries.map(q => s[q]).reduce((a,b) => parseInt(a) + parseInt(b), 0)),
                        acyclic_execution: this.numberWithCommas(parseInt(s['execution time (ms)']) - this.cyclic_queries.map(q => s[q]).reduce((a,b) => parseInt(a) + parseInt(b), 0)),
                    }
                } else 
                return {
                    ...s,
                    ['preprocessing time (ms)']: this.numberWithCommas(s['preprocessing time (ms)']),
                    ['execution time (ms)']: this.numberWithCommas(this.numberWithCommas(s['execution time (ms)'])),
                    cyclic_execution: this.numberWithCommas(this.cyclic_queries.map(q => s[q]).reduce((a,b) => parseInt(a) + parseInt(b), 0)),
                        acyclic_execution: this.numberWithCommas(parseInt(s['execution time (ms)']) - this.cyclic_queries.map(q => s[q]).reduce((a,b) => parseInt(a) + parseInt(b), 0)),
                }
            })

            return result
        },
        snap_overall_students: function() {
            const self = this
            return this.students.map(s => {
                return {
                    ...s,
                    ['triangle-full']: self.snap_datasets.map(d => parseInt(s[d+"-"+'triangle-full'])).reduce((a,b) => a+b,0),
                    ['triangle-count']: self.snap_datasets.map(d => parseInt(s[d+"-"+'triangle-count'])).reduce((a,b) => a+b,0),
                    ['1-path-full']: self.snap_datasets.map(d => parseInt(s[d+"-"+'1-path-full'])).reduce((a,b) => a+b,0),
                    ['1-path-count']: self.snap_datasets.map(d => parseInt(s[d+"-"+'1-path-count'])).reduce((a,b) => a+b,0),
                    ['2-path-full']: self.snap_datasets.map(d => parseInt(s[d+"-"+'2-path-full'])).reduce((a,b) => a+b,0),
                    ['2-path-count']: self.snap_datasets.map(d => parseInt(s[d+"-"+'2-path-count'])).reduce((a,b) => a+b,0),
                }
            })
        }
    },
    methods: {
        numberWithCommas: function (x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    }
})

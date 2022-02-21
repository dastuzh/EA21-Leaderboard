/*!
 * Start Bootstrap - Bare v4.3.0 (https://startbootstrap.com/template/bare)
 * Copyright 2013-2021 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-bare/blob/master/LICENSE)
 */
// This file is intentionally blank
// Use this file to add JavaScript to your project

Vue.filter("formatNumber", function (value) {
    if (value == "N/A") {
        return "N/A"
    } else if (Number.isNaN(parseInt(value))) {
        return "X"
    }

    return numeral(value).format("0,0"); // displaying other groupings/separators is possible, look at the docs
    // return value
  });

var app = new Vue({
    el: '#app',
    data: {
        students: [
            ...students,
            {
                "imdb_timeout": true,
                "repository": "EA21-11",
                "preprocessing time (ms)": "10614.0",
                "execution time (ms)": "82095.0",
                "submission time": "17/05/2021 15:02:08",
                "update time": "18/05/2021 15:33:24",
                "timestamp": "1621344804",
                "facebook-triangle-full": "2300.0",
                "facebook-triangle-count": "1375.0",
                "facebook-1-path-full": "36.0",
                "facebook-1-path-count": "25.0",
                "facebook-2-path-full": "2760.0",
                "facebook-2-path-count": "1602.0",
                "twitter-triangle-full": "9211.0",
                "twitter-triangle-count": "7568.0",
                "twitter-1-path-full": "533.0",
                "twitter-1-path-count": "440.0",
                "twitter-2-path-full": "20977.0",
                "twitter-2-path-count": "15261.0",
                "wiki-triangle-full": "353.0",
                "wiki-triangle-count": "278.0",
                "wiki-1-path-full": "22.0",
                "wiki-1-path-count": "15.0",
                "wiki-2-path-full": "710.0",
                "wiki-2-path-count": "432.0",
                "enron-triangle-full": "2158.0",
                "enron-triangle-count": "1710.0",
                "enron-1-path-full": "129.0",
                "enron-1-path-count": "105.0",
                "enron-2-path-full": "8782.0",
                "enron-2-path-count": "5313.0",
                "query1": "X",
                "query2": "X",
                "query3": "X",
                "query4": "X",
                "query5": "X"
            },
            {
                "snap_timeout": true,
                "imdb_timeout": true,
                "repository": "EA21-05",
                "preprocessing time (ms)": "N/A",
                "execution time (ms)": "X",
                "submission time": "08/05/2021 00:00:00",
                "update time": "27/05/2021 11:44:47",
                "timestamp": "1620546287",
                "facebook-triangle-count": "X",
                "wiki-triangle-count": "X",
                "enron-triangle-count": "X",
                "twitter-triangle-count": "X",
                "facebook-triangle-full": "X",
                "wiki-triangle-full": "X",
                "enron-triangle-full": "X",
                "twitter-triangle-full": "X",
                "facebook-1-path-count": "X",
                "wiki-1-path-count": "X",
                "enron-1-path-count": "X",
                "twitter-1-path-count": "X",
                "facebook-1-path-full": "X",
                "wiki-1-path-full": "X",
                "enron-1-path-full": "X",
                "twitter-1-path-full": "X",
                "facebook-2-path-count": "X",
                "wiki-2-path-count": "X",
                "enron-2-path-count": "X",
                "twitter-2-path-count": "X",
                "facebook-2-path-full": "X",
                "wiki-2-path-full": "X",
                "enron-2-path-full": "X",
                "twitter-2-path-full": "X",
                "query1": "X",
                "query2": "X",
                "query3": "X",
                "query4": "X",
                "query5": "X",
            },
            {
                "snap_timeout": true,
                "imdb_timeout": true,
                "repository": "EA21-03",
                "preprocessing time (ms)": "N/A",
                "execution time (ms)": "X",
                "submission time": "08/06/2021 00:00:00",
                "update time": "16/06/2021 11:44:47",
                "timestamp": "1620546287",
                "facebook-triangle-count": "X",
                "wiki-triangle-count": "X",
                "enron-triangle-count": "X",
                "twitter-triangle-count": "X",
                "facebook-triangle-full": "X",
                "wiki-triangle-full": "X",
                "enron-triangle-full": "X",
                "twitter-triangle-full": "X",
                "facebook-1-path-count": "X",
                "wiki-1-path-count": "X",
                "enron-1-path-count": "X",
                "twitter-1-path-count": "X",
                "facebook-1-path-full": "X",
                "wiki-1-path-full": "X",
                "enron-1-path-full": "X",
                "twitter-1-path-full": "X",
                "facebook-2-path-count": "X",
                "wiki-2-path-count": "X",
                "enron-2-path-count": "X",
                "twitter-2-path-count": "X",
                "facebook-2-path-full": "X",
                "wiki-2-path-full": "X",
                "enron-2-path-full": "X",
                "twitter-2-path-full": "X",
                "query1": "X",
                "query2": "X",
                "query3": "X",
                "query4": "X",
                "query5": "X",
            },
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
        snap_acyclic_queries: ["facebook-1-path-full","facebook-1-path-count","facebook-2-path-full","facebook-2-path-count","twitter-1-path-full","twitter-1-path-count","twitter-2-path-full","twitter-2-path-count","wiki-1-path-full","wiki-1-path-count","wiki-2-path-full","wiki-2-path-count","enron-1-path-full","enron-1-path-count","enron-2-path-full","enron-2-path-count",],
        snap_all_queries: ["facebook-1-path-full","facebook-1-path-count","facebook-2-path-full","facebook-2-path-count","twitter-1-path-full","twitter-1-path-count","twitter-2-path-full","twitter-2-path-count","wiki-1-path-full","wiki-1-path-count","wiki-2-path-full","wiki-2-path-count","enron-1-path-full","enron-1-path-count","enron-2-path-full","enron-2-path-count","facebook-triangle-full", "facebook-triangle-count", "twitter-triangle-full", "twitter-triangle-count", "wiki-triangle-full", "wiki-triangle-count", "enron-triangle-full", "enron-triangle-count",],
        imdb_acyclic_queries: ['query1', 'query2', 'query3', 'query4', 'query5']
    },
    computed: {
        formatted_students: function() {
            const result = this.students.map(s => {
                if (s.repository.startsWith("Postgres")) {
                    return {
                        ...s,
                        ['preprocessing time (ms)']: "N/A",
                        ['execution time (ms)']: this.numberWithCommas(s['execution time (ms)']),
                        cyclic_execution: this.cyclic_queries.map(q => s[q]).reduce((a,b) => parseInt(a) + parseInt(b), 0),
                        snap_acyclic_execution: this.snap_acyclic_queries.map(q => s[q]).reduce((a,b) => parseInt(a) + parseInt(b), 0),
                        imdb_acyclic_execution: this.imdb_acyclic_queries.map(q => s[q]).reduce((a,b) => parseInt(a) + parseInt(b), 0),
                        snap_execution: this.snap_all_queries.map(q => s[q]).reduce((a,b) => parseInt(a) + parseInt(b), 0),
                    }
                } else 
                return {
                    ...s,
                    ['preprocessing time (ms)']: this.numberWithCommas(s['preprocessing time (ms)']),
                    ['execution time (ms)']: this.numberWithCommas(this.numberWithCommas(s['execution time (ms)'])),
                    cyclic_execution: this.cyclic_queries.map(q => s[q]).reduce((a,b) => parseInt(a) + parseInt(b), 0),
                        snap_acyclic_execution: this.snap_acyclic_queries.map(q => s[q]).reduce((a,b) => parseInt(a) + parseInt(b), 0),
                        imdb_acyclic_execution: this.imdb_acyclic_queries.map(q => s[q]).reduce((a,b) => parseInt(a) + parseInt(b), 0),
                        snap_execution: this.snap_all_queries.map(q => s[q]).reduce((a,b) => parseInt(a) + parseInt(b), 0),
                }
            }).sort((a,b) => {
                if (a.snap_timeout) {
                    return 1
                } else if (b.snap_timeout) {
                    return -1
                }
                return a.snap_execution - b.snap_execution 
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
            return x;
        }
    }
})

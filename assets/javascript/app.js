
        $(".container").hide("fast", function () {

        })
        $("#headerName").hide("fast", function () {

        })

        $("#startButton").on("click", function () {
            $(".container").show("slow", function () {

            })
            $("#headerName").show("slow", function () {

            })
            $("#startButton").hide("slow", function () {

            })
            done_flag = 0;
            startT();
        })

        var score = 0
        var timer_done = 0
        var done_flag = 0

        var hName = $("#headerName")
        var results = $("#resultsID")
        var mainJq = $("#main")


        var buttonq1a = $("input[id=q1a]:checked").val()
        function mainPage() {
            $('input[name=q1]').attr('checked', false);
        }


        $("#restartButton").hide("slow", function () {
            // alert("You got " + score + " out of 5 correct")
            //  results.html("You got " + score + " out of 5 correct")
        })

        //     

        $("#startButton").on("click", function () {
            console.log("start")

        })

        function check() {
            console.log("done")
            if (document.getElementById("q1a").checked) {
                console.log("q1a is checked")
                score = score + 1;
            }
            else if (document.getElementById("q1b").checked) {
                console.log("wrong answer")
            }
            else if (document.getElementById("q1c").checked) {
                console.log("wrong answer")
            }
            else if (document.getElementById("q1d").checked) {
                console.log("wrong answer")
            }
            else {
                console.log("You did not pick an answer")
            }


            if (document.getElementById("q2c").checked) {
                console.log("q2c is checked")
                score = score + 1;
            }
            else if (document.getElementById("q2b").checked) {
                console.log("wrong answer")
            }
            else if (document.getElementById("q2a").checked) {
                console.log("wrong answer")
            }
            else if (document.getElementById("q2d").checked) {
                console.log("wrong answer")
            }
            else {
                console.log("You did not pick an answer")
            }


            if (document.getElementById("q3b").checked) {
                console.log("q3b is checked")
                score = score + 1;
                // console.log("You got " + score + "out of 5");
            }
            else if (document.getElementById("q3a").checked) {
                console.log("wrong answer")

            }
            else if (document.getElementById("q3c").checked) {
                console.log("wrong answer")
            }
            else if (document.getElementById("q3d").checked) {
                console.log("wrong answer")
            }
            else {
                console.log("You did not pick an answer")
            }

            if (document.getElementById("q4b").checked) {
                console.log("q4b is checked")
                score = score + 1;
            }
            else if (document.getElementById("q4c").checked) {
                console.log("wrong answer")
            }
            else if (document.getElementById("q4d").checked) {
                console.log("wrong answer")
            }
            else if (document.getElementById("q4a").checked) {
                console.log("wrong answer")
            }
            else {
                console.log("You did not pick an answer")
            }


            if (document.getElementById("q5d").checked) {
                console.log("q5d is checked")
                score = score + 1;
            }
            else if (document.getElementById("q5b").checked) {
                console.log("wrong answer")
            }
            else if (document.getElementById("q5c").checked) {
                console.log("wrong answer")
            }
            else if (document.getElementById("q5a").checked) {
                console.log("wrong answer")
            }
            else {
                console.log("You did not pick an answer")

            }
            console.log("You got " + score + " out of 5 correct")


        }


        function startTimer(duration, display) {
            var timer = duration, minutes, seconds;
            setInterval(function () {
                minutes = parseInt(timer / 60, 10);
                seconds = parseInt(timer % 60, 10);

                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;

                // hName.html("Time Remaining: " + minutes + ":" + seconds);
                hName.html("Time Remaining: " + minutes + ":" + seconds)
                //  --timer
                console.log (" inside startTimer, timer = "+timer)
                console.log ("timer_done = "+timer_done)
                console.log ("done_flag = "+done_flag)
                if ((timer === 0) && (timer_done === 0)) {
                    console.log ("I am inside Shaz-1")
                    check()
                    if (done_flag === 0)
                      results.html("Time expired. You got " + score + " out of 5 correct")

                    $("#questionsAnswers").hide("slow", function () {

                    })
                    $("#doneButton").hide("slow", function () {

                    })
                    $("#restartButton").show("slow", function () {

                    })
                    $("#headerName").hide("slow", function () {

                    })
                    $("#resultsID").show("slow", function () {
                    //  alert("You got " + score + " out of 5 correct")
                    })
                    timer_done = 1
                }
                if ((timer_done === 0) && (done_flag === 0)) {
                    if (--timer < 0) {
                        timer = 0
                    }
                }
                else {
                    timer = 60
                } // timer = timer - 1
                console.log("after decrement, timer = " + timer)
              
            }, 1000);

        }



        // jQuery(function ($) {
        function startT() {

            var oneMinutes = 60 * 1,
                display = $('#time');
            startTimer(oneMinutes, display);
        };

        // startT();
        function clearRadio() {
            var ele = document.getElementsByName("q1");
            for (var i = 0; i < ele.length; i++)
                ele[i].checked = false;
            var ele = document.getElementsByName("q2");
            for (var i = 0; i < ele.length; i++)
                ele[i].checked = false;
            var ele = document.getElementsByName("q3");
            for (var i = 0; i < ele.length; i++)
                ele[i].checked = false;
            var ele = document.getElementsByName("q4");
            for (var i = 0; i < ele.length; i++)
                ele[i].checked = false;
            var ele = document.getElementsByName("q5");
            for (var i = 0; i < ele.length; i++)
                ele[i].checked = false;
        }

        $(document).ready(function () {
            $("#doneButton").click(function () {
                $("#question1").hide("slow", function () {
                    //  alert("You got " + score + " out of 5 correct")
                })
                $("#question2").hide("slow", function () {
                    //  alert("You got " + score + " out of 5 correct")
                })
                $("#question3").hide("slow", function () {
                    //  alert("You got " + score + " out of 5 correct")
                })
                $("#question4").hide("slow", function () {
                    //  alert("You got " + score + " out of 5 correct")
                })
                $("#question5").hide("slow", function () {
                    //  alert("You got " + score + " out of 5 correct")
                })
                /*  $("body").show("slow", function () {
                     alert("You got " + score + " out of 5 correct")
                 }) */
                $("#headerName").hide("slow", function () {
                    //  alert("You got " + score + " out of 5 correct")
                })
                $("#doneButton").hide("slow", function () {
                    // alert("You got " + score + " out of 5 correct")
                    check()
                    results.html("You got " + score + " out of 5 correct")
                })
                $("#restartButton").show("slow", function () {
                    // alert("You got " + score + " out of 5 correct")
                    //  results.html("You got " + score + " out of 5 correct")
                })
                $("#questionsAnswers").show("slow", function () {

                })
                $("#resultsID").show("slow", function () {
                    //  alert("You got " + score + " out of 5 correct")
                })
                done_flag = 1;


            })

        })

        $(document).ready(function () {
            $("#restartButton").click(function () {
                $("#question1").show("slow", function () {
                    //  alert("You got " + score + " out of 5 correct")
                })
                $("#question2").show("slow", function () {
                    //  alert("You got " + score + " out of 5 correct")
                })
                $("#question3").show("slow", function () {
                    //  alert("You got " + score + " out of 5 correct")
                })
                $("#question4").show("slow", function () {
                    //  alert("You got " + score + " out of 5 correct")
                })
                $("#question5").show("slow", function () {
                    //  alert("You got " + score + " out of 5 correct")
                })
                /*  $("body").show("slow", function () {
                     alert("You got " + score + " out of 5 correct")
                 }) */
                $("#headerName").show("slow", function () {
                    //  alert("You got " + score + " out of 5 correct")
                })
                $("#doneButton").show("slow", function () {
                    // alert("You got " + score + " out of 5 correct")
                    // results.html("You got " + score + " out of 5 correct")
                })
                $("#restartButton").hide("slow", function () {
                    // alert("You got " + score + " out of 5 correct")
                    //  results.html("You got " + score + " out of 5 correct")
                })
                $("#questionsAnswers").show("slow", function () {

                })
                $("#resultsID").hide("slow", function () {
                    //  alert("You got " + score + " out of 5 correct")
                })
                done_flag = 0;
                timer_done = 0;
                timer = 60;
                clearRadio()


            })

        })

    
// Copyright (c) 2022 Youngwook All rights reserved
//
// Created by: Youngwook
// Created on: OCT 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */

if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit3-04-JS/sw.js", {
    scope: "/ICS2O-Unit3-04-JS/",
  })
}

// fahrenheit to celcius

function submit() {
  // input
  const fahrenheit = parseFloat(
    document.getElementById("fahrenheit-temperature").value
  )

  // process
  const celcius = (fahrenheit - 32) * (5 / 9)

  // output
  document.getElementById("celcius").innerHTML =
    "The temperature with celcius is : " + celcius.toFixed(2) + " °C"
}

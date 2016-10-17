'use strict'

$(document).ready(() => {
  $(`.button-collapse`).sideNav()
  $(`.modal-trigger`).leanModal()
  $(`select`).material_select()

  // event listener for click on tr,
  // $(`tr`).click(() => {
  //   const tick_id = $(this).children().text()
  //
  //   console.log(tick_id)
  // })

})

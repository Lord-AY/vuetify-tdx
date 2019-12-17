!(function(d) {
  "use strict";
  var n = {
    init: function() {
      d(document.body).on(
        "keyup change",
        "form.register #reg_password, form.checkout #account_password, form.edit-account #password_1, form.lost_reset_password #password_1",
        this.strengthMeter
      ),
        d("form.checkout #createaccount").change();
    },
    strengthMeter: function() {
      var s,
        r = d(
          "form.register, form.checkout, form.edit-account, form.lost_reset_password"
        ),
        e = d('button[type="submit"]', r),
        t = d("#reg_password, #account_password, #password_1", r),
        o = t.val(),
        a = !r.is("form.checkout");
      n.includeMeter(r, t),
        (s = n.checkPasswordStrength(r, t)),
        wc_password_strength_meter_params.stop_checkout && (a = !0),
        0 < o.length &&
        s < wc_password_strength_meter_params.min_password_strength &&
        -1 !== s &&
        a
          ? e.attr("disabled", "disabled").addClass("disabled")
          : e.removeAttr("disabled", "disabled").removeClass("disabled");
    },
    includeMeter: function(s, r) {
      var e = s.find(".woocommerce-password-strength");
      "" === r.val()
        ? (e.hide(), d(document.body).trigger("wc-password-strength-hide"))
        : 0 === e.length
        ? (r.after(
            '<div class="woocommerce-password-strength" aria-live="polite"></div>'
          ),
          d(document.body).trigger("wc-password-strength-added"))
        : (e.show(), d(document.body).trigger("wc-password-strength-show"));
    },
    checkPasswordStrength: function(s, r) {
      var e = s.find(".woocommerce-password-strength"),
        t = s.find(".woocommerce-password-hint"),
        o =
          '<small class="woocommerce-password-hint">' +
          wc_password_strength_meter_params.i18n_password_hint +
          "</small>",
        a = wp.passwordStrength.meter(
          r.val(),
          wp.passwordStrength.userInputBlacklist()
        ),
        d = "";
      if ((e.removeClass("short bad good strong"), t.remove(), e.is(":hidden")))
        return a;
      switch (
        (a < wc_password_strength_meter_params.min_password_strength &&
          (d = " - " + wc_password_strength_meter_params.i18n_password_error),
        a)
      ) {
        case 0:
          e.addClass("short").html(pwsL10n["short"] + d), e.after(o);
          break;
        case 1:
        case 2:
          e.addClass("bad").html(pwsL10n.bad + d), e.after(o);
          break;
        case 3:
          e.addClass("good").html(pwsL10n.good + d);
          break;
        case 4:
          e.addClass("strong").html(pwsL10n.strong + d);
          break;
        case 5:
          e.addClass("short").html(pwsL10n.mismatch);
      }
      return a;
    }
  };
  n.init();
})(jQuery);

const fast_arrive = () => {
    auto.waitFor();
    
    const appName = "山姆会员商店";
    launchApp(appName);
    
    sleep(600);

    id("navigation_btn_cart").findOne().click();
    while (true) {
        while (!id("text_submit_order").exists()) {
            while (!id("cart_btn_settle_accounts").exists()) {
                id("navigation_btn_home").findOne().click()
                id("navigation_btn_cart").findOne().click()
                sleep(550);
            }
            while (text("结算(0)").exists()) {
                id("navigation_btn_home").findOne().click()
                id("navigation_btn_cart").findOne().click()
                sleep(550);
            }
            id("cart_btn_settle_accounts").findOne().click()
            sleep(950);
        };
        while (id("tv_common_error_btn").exists()) {
            id("tv_common_error_btn").findOne().click()
            sleep(600);
        }

        if (text("今日订单已达上限").exists()) {
            back();
            sleep(200);
        };

        if (submitbt = id("text_submit_order").findOne(1000)) {
            submitbt.click();
            sleep(250);
        } else {
            continue;
        };


        while (true) {
            if (text("配送时间段已约满\n请稍后再试或尝试其他配送方式").exists()) {
                back();
                sleep(150);
                back();
                sleep(250);
                break;
            }
            if (id("tv_no_data_msg").exists()) {
                id("settle_dialog_pay_cancel").findOne().click()
                break;
            };
            if (id("settle_dialog_pay_confirm").exists()) {
                className("android.widget.TextView").text("支付宝").findOne().parent().parent().click();
                id("settle_dialog_pay_confirm").findOne().click()
                stop();
            }

            if (id("text_submit_order").exists()) {
                break;
            }
        }

    }

}


const city_arrive = () => {
    auto.waitFor()
    
    
    const appName = "山姆会员商店";
    launchApp(appName);
    sleep(600);

    id("navigation_btn_cart").findOne().click();


    while (true) {
        while (!id("text_submit_order").exists()) {
            while (!id("cart_btn_settle_accounts").exists()) {
                id("navigation_btn_home").findOne().click()
                id("navigation_btn_cart").findOne().click()
                sleep(550);
            };
            while (text("结算(0)").exists()) {
                id("navigation_btn_home").findOne().click()
                id("navigation_btn_cart").findOne().click()
                sleep(550);
            };

            //make sure is city_arrive
            while (!text("当日或隔日达满299免运费").exists()) {
                id("cart_goods_way_common").findOne().click();
                sleep(500);
            }

            id("cart_btn_settle_accounts").findOne().click()
            sleep(950);
        };



        while (id("tv_common_error_btn").exists()) {
            id("tv_common_error_btn").findOne().click()
            sleep(600);
        }

        if (text("今日订单已达上限").exists()) {
            back();
            sleep(200);
        };

        if (submitbt = id("text_submit_order").findOne(1000)) {
            submitbt.click();
            sleep(250);
        } else {
            continue;
        };


        while (true) {
            if (text("配送时间段已约满\n请稍后再试或尝试其他配送方式").exists()) {
                back();
                sleep(150);
                back();
                sleep(250);
                break;
            }
            if (id("tv_no_data_msg").exists()) {
                id("settle_dialog_pay_cancel").findOne().click()
            };
            if (id("settle_dialog_pay_confirm").exists()) {
                className("android.widget.TextView").text("支付宝").findOne().parent().parent().click();
                id("settle_dialog_pay_confirm").findOne().click()
                stop();
            }

            if (id("text_submit_order").exists()) {
                break;
            }
        }

    }
}


//要用哪个就把哪个之前的双斜杠去掉

//极速达去掉下一行的双斜线
fast_arrive();

//同城配去掉下一行的双斜线
//city_arrive();
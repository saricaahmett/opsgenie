/**
 * Created by Ahmet Sarica on 14.4.2017.
 */
var Pages =
    {
        "ALERTS": {
            pagePath: "alerts.html",
            pageID: "alerts",
            dependencies: ["AlertsView.js", "AlertsPresenter.js", "AlertsModel.js"],
            path: "apps/alerts/",
            pageTitle: {
                en: "Alerts",
                tr: "Alarmlar"
            }
        },
        "ALERTSDETAIL": {
            pagePath: "alerts-detail.html",
            pageID: "alertsDetail",
            dependencies: ["AlertsDetailView.js", "AlertsDetailPresenter.js", "AlertsDetailModel.js"],
            path: "apps/alertsDetail/",
            pageTitle: {
                en: "Alerts Detail",
                tr: "Alarm Detayları"
            }
        },
        "HOMEPAGE": {
            pagePath: "home-page.html",
            pageID: "home-page",
            dependencies: ["HomePageView.js", "HomePagePresenter.js", "HomePageModel.js"],
            path: "apps/homePage/",
            pageTitle: {
                en: "Home Page",
                tr: "Ana Sayfa"
            }
        },
        "PAGE2": {
            pagePath: "page2.html",
            pageID: "page2",
            dependencies: [],
            path: "apps/page2/",
            pageTitle: {
                en: "Home Page",
                tr: "Ana Sayfa"
            }
        },
        "PAGE3": {
            pagePath: "page3.html",
            pageID: "page3",
            dependencies: [],
            path: "apps/page3/",
            pageTitle: {
                en: "Home Page",
                tr: "Ana Sayfa"
            }
        },
        "PAGE4": {
            pagePath: "page4.html",
            pageID: "page4",
            dependencies: [],
            path: "apps/page4/",
            pageTitle: {
                en: "Home Page",
                tr: "Ana Sayfa"
            }
        }
    }

var PopupPages = {
    "CALENDAR": {
        pagePath: "calendar.html",
        pageID: "calendar",
        dependencies: ["Calendar.js"],
        path: "apps/calendar/",
        pageTitle: {
            en: "Calendar",
            tr: "Takvim"
        }
    },
}
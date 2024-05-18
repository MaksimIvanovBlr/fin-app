import {
    ADMIN_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    HOME_ROUTE,
    USER_SETTINGS_ROUTE,
    DAILY_ROUTE,
    SALARY_LIST_ROUTE,
    EXPENSES_LIST_ROUTE, ADDITIONAL_INCOME_LIST_ROUTE
} from "./utils/consts"
import MainPage from "./pages/MainPage";
import AdminPage from "./pages/AdminPage";
import UserSettingsPage from "./pages/UserSettingsPage";
import DailyPage from "./pages/DailyPage";
import SalaryPage from "./pages/SalaryPage";
import ExpensesPage from "./pages/ExpensesPage";
import AdditionalIncomePage from "./pages/AdditionalIncomePage";
import AuthPage from "./pages/AuthPage";

export const authRouts = [
    {
        path: ADMIN_ROUTE,
        Component: AdminPage
    },
    {
        path: HOME_ROUTE,
        Component: MainPage
    },
    {
        path: USER_SETTINGS_ROUTE,
        Component: UserSettingsPage
    },
    {
        path: DAILY_ROUTE,
        Component: DailyPage
    },
    {
        path: SALARY_LIST_ROUTE,
        Component: SalaryPage
    },
    {
        path: EXPENSES_LIST_ROUTE,
        Component: ExpensesPage
    },
    {
        path: ADDITIONAL_INCOME_LIST_ROUTE,
        Component: AdditionalIncomePage
    },

]


export const publicRouts = [

    {
        path: LOGIN_ROUTE,
        Component: AuthPage
    },
    {
        path: REGISTRATION_ROUTE,
        Component: AuthPage
    },
]
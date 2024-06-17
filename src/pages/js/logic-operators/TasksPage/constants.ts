export const tasks = [
	{
		code: `const email = ''
const phoneNumber = '123456789'

const isRegistrationSuccessful = email !== '' || phoneNumber !== ''`,
		answer: 'true',
	},
	{
		code: `let canUnlockPhone = true || false;`,
		answer: 'true',
	},
	{
		code: `let canEnterBuilding = false || true;`,
		answer: 'true',
	},
	{
		code: `let canAccessAdminPanel = false && true;`,
		answer: 'false',
	},
	{
		code: `let canParticipate = true && false;`,
		answer: 'false',
	},
	{
		code: `let isEligibleForJob = true && false && true;`,
		answer: 'false',
	},
	{
		code: `let willWakeUpOnTime = true && (false || true || false);`,
		answer: 'true',
	},
	{
		code: `let canOpenDoor = (false || true || false) && false;`,
		answer: 'false',
	},
	{
		code: `let taskSuccessful = (true && (false || true)) || true;`,
		answer: 'true',
	},
	{
		code: `let canEnterParty = (false || true) && (false || false || true);`,
		answer: 'true',
	},
	{
		code: `let canEnterEvent = (false || true || (false && false)) && true;`,
		answer: 'true',
	},
	{
		code: `let canGoOnTrip = (true || false) && !false && !true && true;`,
		answer: 'false',
	},
	{
		code: `let canBeHired = true && (true || true) && false && (true || !false);`,
		answer: 'true',
	},
	{
		code: `let isAccountSecure = true && (false || true) && (false || true);`,
		answer: 'true',
	},
	{
		code: `let userProvidedName = null;
let defaultName = "Guest";

let displayName = userProvidedName ?? defaultName;`,
		answer: 'Guest',
	},
	{
		code: `let inputValue;
let defaultValue = 42;

let result = inputValue ?? defaultValue;`,
		answer: '42',
	},
	{
		code: `let userInput = null;
let defaultInput = 10;
let isInputValid = true;
let isAdmin = false;

let finalValue = (userInput ?? defaultInput) && isInputValid && (!isAdmin || userInput !== null);`,
		answer: '10',
		expl: 'У цій задачі userInput є null, тому використовується значення defaultInput. Результат буде 10, якщо isInputValid є true, і додатково перевіряється, що !isAdmin або userInput не є null. У цій ситуації isInputValid є true, isAdmin є false, тому кінцеве значення буде 10.',
	},
	{
		code: `let hasPermission = false;
let isUserAuthenticated = null;
let hasTwoFactorAuth = true;
let defaultAuthentication = false;
let isAccountActive = true;

let canAccess = (isUserAuthenticated ?? defaultAuthentication) && (hasPermission || hasTwoFactorAuth) && !(!isAccountActive);`,
		answer: 'true',
		expl: 'Ця задача перевіряє кілька умов для доступу до ресурсу. isUserAuthenticated є null, тому використовується значення defaultAuthentication (false). Проте, hasTwoFactorAuth є true, тому одна з умов доступу виконується. Додатково, перевіряється, що isAccountActive не є false. Усі умови виконуються, тому відповідь буде true.',
	},
	{
		code: `let userRole = null;
let defaultRole = "guest";
let hasPaidSubscription = false;
let isTrialUser = true;
let isLoggedIn = true;

let role = userRole ?? defaultRole;
let canAccessPremiumContent = (role === "admin" || (hasPaidSubscription || isTrialUser)) && isLoggedIn && !(role === "guest" && !hasPaidSubscription);`,
		answer: 'true',
		expl: 'Тут userRole є null, тому використовується значення defaultRole (guest). Доступ до преміум-контенту можливий, якщо користувач має роль admin, або має підписку, або є пробним користувачем, і при цьому залогінений, а також перевіряється, що guest без підписки не має доступу. У цій ситуації isLoggedIn є true та isTrialUser є true, тому всі умови виконуються, і відповідь буде true.',
	},
]

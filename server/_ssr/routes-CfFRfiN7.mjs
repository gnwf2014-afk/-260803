import { n as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { C as ChevronRight, D as ArrowRight, E as Building2, O as Accessibility, S as ClipboardCheck, T as Check, a as Stethoscope, c as ShieldCheck, f as MessageCircleHeart, g as House, i as UserRoundCheck, l as Search, m as MapPin, n as Users, o as Sparkles, r as UsersRound, t as X, u as PhoneCall, v as HeartHandshake, y as HandHeart } from "../_libs/lucide-react.mjs";
import { n as SiteHeader, r as map_gangnam_default, t as SiteFooter } from "./map-gangnam-CAbRhm81.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CfFRfiN7.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
var badgeVariants = cva("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
	variants: { variant: {
		default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
		secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
		destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
		outline: "text-foreground"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
function ProgramDetailDialog({ program, open, onOpenChange }) {
	if (!program) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "flex max-h-[calc(100dvh-1rem)] w-[calc(100vw-1rem)] max-w-6xl flex-col gap-0 overflow-hidden rounded-[1.5rem] border-0 p-0 shadow-2xl sm:max-h-[90dvh] sm:w-[calc(100vw-2rem)] lg:grid lg:h-[min(760px,90dvh)] lg:grid-cols-[0.9fr_1.1fr] [&>button]:right-3 [&>button]:top-3 [&>button]:z-30 [&>button]:grid [&>button]:h-10 [&>button]:w-10 [&>button]:place-items-center [&>button]:rounded-full [&>button]:bg-white/95 [&>button]:text-[#173e47] [&>button]:opacity-100 [&>button]:shadow-lg [&>button_svg]:h-5 [&>button_svg]:w-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative aspect-[4/3] w-full flex-none overflow-hidden bg-[#e8f5f1] lg:aspect-auto lg:h-full",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: program.image,
						alt: `${program.title} 사업 안내 이미지`,
						className: "h-full w-full object-contain",
						width: 1448,
						height: 1086
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-h-0 flex-1 overflow-y-auto bg-white",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-b border-[#e5eeeb] px-5 pb-5 pt-6 sm:px-7 sm:pb-6 sm:pt-7 lg:pr-16",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
								className: "mb-3 bg-[#ff7652] text-white hover:bg-[#ff7652]",
								children: ["특화사업 ", String(program.no).padStart(2, "0")]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
								className: "text-2xl font-black leading-tight text-[#173e47] sm:text-3xl",
								children: program.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
								className: "mt-2 text-sm leading-6 text-[#6a7f84] sm:text-base",
								children: program.tagline
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 p-5 sm:grid-cols-2 sm:p-7 lg:grid-cols-1 xl:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailBlock, {
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-5 w-5" }),
								title: "대상자",
								items: program.target,
								accent: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailBlock, {
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HandHeart, { className: "h-5 w-5" }),
								title: "사업지원 내용",
								items: program.support
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailBlock, {
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "h-5 w-5" }),
								title: "제공기관",
								items: program.provider
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
								className: "rounded-2xl bg-[#fff4ec] p-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-3 flex items-center gap-2 text-[#c95635]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-5 w-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "font-bold",
										children: "사례 이야기"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm leading-7 text-[#536b70]",
									children: program.caseStory
								})]
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, {
					className: "sr-only",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: program.title })
				})
			]
		})
	});
}
function DetailBlock({ icon, title, items, accent }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: `rounded-2xl border p-5 ${accent ? "border-[#bde5de] bg-[#e3f8f4]" : "border-[#dfe8e6] bg-white"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `mb-3 flex items-center gap-2 ${accent ? "text-[#07877f]" : "text-[#173e47]"}`,
			children: [icon, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
				className: "font-bold",
				children: title
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "space-y-2 text-sm leading-7 text-[#536b70]",
			children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex gap-2.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#07877f]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
			}, item))
		})]
	});
}
var PROGRAMS = [
	{
		id: "smart-senior-house",
		no: 1,
		title: "스마트 시니어 하우스",
		tagline: "IoT 안전·건강 모니터링으로 살던 집에서 안심 생활",
		image: "/assets/program-clay-1-smart-house-DFcxZwBN.png",
		target: [
			"강남구 거주 만 65세 이상 어르신",
			"독거·고령 부부 가구 우선",
			"기초생활수급·차상위·돌봄 필요 가구"
		],
		support: [
			"움직임 감지·화재·가스 IoT 센서 설치 및 24시간 모니터링",
			"응급 시 119·보호자·돌봄매니저 자동 알림",
			"월 1회 방문 점검 및 생활 안부 확인"
		],
		provider: [
			"강남구청 돌봄정책과",
			"강남구 스마트복지관",
			"협력 IoT 케어 사업단"
		],
		caseStory: "역삼동에 거주하는 78세 김ㅇㅇ어르신은 야간 낙상 후 IoT 센서가 보호자와 119에 자동 알림을 보내 빠른 응급조치를 받을 수 있었습니다."
	},
	{
		id: "integrated-support-center",
		no: 2,
		title: "스마트 통합돌봄 지원센터 건강증진",
		tagline: "건강 측정·운동·교육이 한 곳에서, 동네 건강 허브",
		image: "/assets/program-clay-2-health-Cmwvsq6U.png",
		target: ["강남구 거주 어르신 및 만성질환자", "건강관리가 필요한 1인 가구"],
		support: [
			"혈압·혈당·체성분 등 정기 건강 측정",
			"맞춤 운동·영양·인지 강화 프로그램 운영",
			"건강 데이터 기반 1:1 상담 및 지역의료기관 연계"
		],
		provider: ["강남구 통합돌봄 지원센터", "보건소 및 권역 의료기관"],
		caseStory: "당뇨로 어려움을 겪던 박ㅇㅇ어르신은 6개월간 센터 프로그램에 참여한 뒤 혈당이 안정되고 일상 활동량이 두 배로 늘었습니다."
	},
	{
		id: "discharge-link",
		no: 3,
		title: "퇴원환자 지역연계",
		tagline: "병원에서 집으로, 끊김 없는 회복 케어",
		image: "/assets/program-clay-3-discharge-Cfo5aI_g.png",
		target: ["강남구 거주 퇴원 예정·직후 환자", "재가 돌봄·재활이 필요한 만성·중증질환자"],
		support: [
			"퇴원 전 사례관리사 상담 및 가정 환경 점검",
			"방문간호·재활·복약 지도 8주 집중 케어",
			"필요 시 보조기기·재가 의료 서비스 연계"
		],
		provider: ["지역 거점병원 사회사업팀", "강남구 보건소·방문간호센터"],
		caseStory: "뇌졸중 수술 후 퇴원한 이ㅇㅇ님은 8주 집중 연계 케어로 보행이 회복되어 다시 동네 산책을 즐기고 있습니다."
	},
	{
		id: "hospice",
		no: 4,
		title: "생애 말기 호스피스",
		tagline: "마지막 순간까지 존엄한 삶, 가족과 함께",
		image: "/assets/program-clay-4-hospice-c-jOUDA8.png",
		target: ["말기 질환으로 진단받은 어르신과 가족", "가정형 호스피스 돌봄을 희망하는 가구"],
		support: [
			"통증·증상 관리 및 정서·영적 돌봄",
			"가족 돌봄자 교육 및 사별 후 애도 상담",
			"24시간 전화 상담과 응급 방문 지원"
		],
		provider: ["권역 호스피스 전문기관", "강남구 통합돌봄 지원센터"],
		caseStory: "말기 암 환자 최ㅇㅇ어르신은 가정형 호스피스로 가족과 함께 평온한 시간을 보냈으며, 유가족도 애도 상담을 통해 일상을 회복했습니다."
	},
	{
		id: "home-exercise",
		no: 5,
		title: "방문운동",
		tagline: "전문가가 집으로 찾아가는 1:1 맞춤 운동",
		image: "/assets/program-clay-5-exercise-DKYNq8wh.png",
		target: ["외출이 어려운 어르신", "낙상 위험·근감소증·만성질환자"],
		support: [
			"운동처방사·물리치료사 가정 방문 (주 1~2회)",
			"근력·균형·유연성 맞춤 프로그램",
			"운동일지 관리 및 가족 코칭"
		],
		provider: ["강남구 통합돌봄 지원센터", "협력 운동처방·재활기관"],
		caseStory: "낙상으로 외출이 두려웠던 정ㅇㅇ어르신은 12주 방문운동 후 보행이 안정되고 외출 빈도가 크게 늘었습니다."
	},
	{
		id: "home-visit-copay",
		no: 6,
		title: "방문진료 본인부담금 지원",
		tagline: "집에서 받는 진료, 부담은 강남구가 함께",
		image: "/assets/program-clay-6-visit-BP8nVggL.png",
		target: ["강남구 거주 거동 불편 어르신·중증 환자", "기초생활수급·차상위·저소득 가구"],
		support: [
			"의사·간호사 가정 방문 진료비 본인부담금 지원 (회당)",
			"연 최대 12회까지 지원",
			"방문진료 의료기관 안내 및 신청 대행"
		],
		provider: ["강남구청 돌봄정책과", "강남구 의사회 협력 방문진료 의료기관"],
		caseStory: "거동이 불편한 한ㅇㅇ어르신은 본인부담금 지원으로 매월 정기 방문진료를 받으며 만성질환을 안정적으로 관리하고 있습니다."
	},
	{
		id: "ai-care",
		no: 7,
		title: "강남 AI 포용케어",
		tagline: "AI 스피커·태블릿으로 24시간 곁에 있는 돌봄",
		image: "/assets/program-clay-7-ai-B7nWsB-U.png",
		target: ["독거 어르신, 디지털 취약 계층", "정서 지원·안부 확인이 필요한 가구"],
		support: [
			"AI 스피커·태블릿 무상 제공 및 설치",
			"음성 안부 확인, 복약·일정 알림",
			"응급 상황 자동 감지 및 보호자 알림"
		],
		provider: ["강남구 통합돌봄 AI 케어 사업단", "협력 ICT 기업 및 지역 자원봉사단"],
		caseStory: "혼자 사시는 조ㅇㅇ어르신은 AI 스피커와 매일 대화하며 외로움이 줄었고, 복약 알림 덕분에 약 복용을 한 번도 잊지 않게 되었습니다."
	}
];
var hero_community_v2_default = "/assets/hero-community-v2-5XDIHCKZ.png";
var situations = [
	{
		title: "퇴원 후 돌봄",
		desc: "병원에서 집으로 돌아온 뒤 회복이 걱정돼요",
		icon: Stethoscope,
		tone: "bg-[#e6f7f4] text-[#07877f]",
		query: "퇴원"
	},
	{
		title: "혼자 사는 어르신",
		desc: "안부 확인과 일상생활 도움이 필요해요",
		icon: House,
		tone: "bg-[#fff1e9] text-[#d46a3b]",
		query: "어르신"
	},
	{
		title: "거동이 불편한 분",
		desc: "방문진료와 이동·재활 지원을 찾고 있어요",
		icon: Accessibility,
		tone: "bg-[#eeeefe] text-[#6659b8]",
		query: "장애인"
	},
	{
		title: "가족 돌봄 부담",
		desc: "돌봄을 나눌 기관과 상담이 필요해요",
		icon: UsersRound,
		tone: "bg-[#fff5d9] text-[#a8750b]",
		query: "가족"
	},
	{
		title: "생애 말기 돌봄",
		desc: "환자와 가족 모두를 위한 지원이 필요해요",
		icon: HeartHandshake,
		tone: "bg-[#fdebed] text-[#bd5262]",
		query: "요양"
	}
];
var serviceGroups = [
	{
		label: "건강·의료",
		desc: "방문진료, 건강관리",
		icon: Stethoscope,
		color: "bg-[#dff5f1]"
	},
	{
		label: "요양·생활",
		desc: "재가요양, 식사, 이동",
		icon: House,
		color: "bg-[#fff0e7]"
	},
	{
		label: "장애인 지원",
		desc: "활동·주간·직업 지원",
		icon: Accessibility,
		color: "bg-[#ececfc]"
	},
	{
		label: "아동·가족",
		desc: "돌봄센터, 가족 상담",
		icon: UsersRound,
		color: "bg-[#fff3cf]"
	}
];
function HomePage() {
	const [query, setQuery] = (0, import_react.useState)("");
	const [selectedProgram, setSelectedProgram] = (0, import_react.useState)(null);
	const submitSearch = (event) => {
		event.preventDefault();
		const value = query.trim();
		window.location.href = value ? `/services?q=${encodeURIComponent(value)}` : "/services";
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-[#fffdf9] text-[#173e47]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "relative overflow-hidden border-b border-[#d9eee9] bg-[linear-gradient(120deg,#e7faf6_0%,#f4fbef_54%,#fff6ec_100%)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -left-20 top-16 h-72 w-72 rounded-full bg-[#8ee3da]/25 blur-3xl" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute right-[35%] top-0 h-64 w-64 rounded-full bg-[#ffc9ac]/25 blur-3xl" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.04fr_0.96fr] lg:py-16",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-2 rounded-full border border-[#9edbd3] bg-white/80 px-4 py-2.5 text-base font-extrabold text-[#07877f] shadow-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-5 w-5" }), " 돌봄은 집에서 삶은 강남에서"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "mt-6 max-w-2xl whitespace-nowrap text-3xl font-black leading-[1.14] tracking-[-0.03em] sm:text-4xl lg:text-[3.1rem]",
									children: "강남구민 맞춤 돌봄 길잡이"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 max-w-xl text-base leading-8 text-[#547179] sm:text-lg",
									children: "필요한 돌봄서비스를 검색하고 편리하게 안내 받을 수 있는 AI검색 창입니다."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
									onSubmit: submitSearch,
									className: "mt-7 flex max-w-2xl items-center rounded-2xl border-2 border-[#07988f] bg-white p-2 shadow-[0_20px_50px_-30px_#087c74]",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "ml-3 h-5 w-5 shrink-0 text-[#07988f]" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											value: query,
											onChange: (event) => setQuery(event.target.value),
											className: "h-12 min-w-0 flex-1 bg-transparent px-3 text-sm outline-none sm:text-base",
											placeholder: "예: 퇴원 후 돌봄, 장애인 주간보호",
											"aria-label": "돌봄 서비스 검색"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "submit",
											className: "flex h-12 shrink-0 items-center gap-1.5 rounded-xl bg-[#07988f] px-4 text-sm font-extrabold text-white transition hover:bg-[#067b74] sm:px-6",
											children: ["찾기 ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 flex flex-wrap gap-2 text-xs font-bold text-[#4e6d74]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "py-2",
										children: "많이 찾는 서비스"
									}), [
										"퇴원환자",
										"1인가구",
										"방문진료",
										"데이케어"
									].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => setQuery(item),
										className: "rounded-full border border-[#b9dcd6] bg-white/70 px-3 py-2 hover:border-[#07988f] hover:text-[#07988f]",
										children: item
									}, item))]
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative mx-auto w-full max-w-xl",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-3 rotate-2 rounded-[2.5rem] bg-[#a9e3d9]" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative overflow-hidden rounded-[2rem] border-[6px] border-white bg-white shadow-[0_30px_70px_-38px_#164e55]",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: hero_community_v2_default,
												alt: "가족과 돌봄 전문가가 함께 웃는 모습",
												className: "aspect-[1.18/1] w-full object-cover object-[64%_center]",
												fetchPriority: "high"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#123f48]/80 to-transparent" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 text-white",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-xs text-white/75",
													children: "생활 가까이 이어지는"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-1 font-extrabold sm:text-lg",
													children: "빈틈없는 우리동네 돌봄"
												})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "rounded-full bg-white/90 px-3 py-1.5 text-xs font-black text-[#07877f]",
													children: "285개 시설 연결"
												})]
											})
										]
									}),
								]
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "care-fit",
					className: "scroll-mt-32 bg-white py-20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-7xl px-4 sm:px-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
							eyebrow: "상황부터 선택하세요",
							title: "어떤 도움이 필요하세요?",
							desc: "서비스 이름을 몰라도 괜찮습니다. 지금 가장 가까운 상황을 골라보세요."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5",
							children: situations.map(({ title, desc, icon: Icon, tone, query: value }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/services",
								className: "group rounded-[1.6rem] border border-[#e3ecea] bg-[#fffdf9] p-5 transition hover:-translate-y-1 hover:border-[#9edbd3] hover:shadow-[0_20px_45px_-30px_#174e55]",
								onClick: () => {
									if (typeof window !== "undefined") sessionStorage.setItem("facilityQuery", value);
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `grid h-12 w-12 place-items-center rounded-2xl ${tone}`,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-6 w-6" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-5 text-lg font-black",
										children: title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 min-h-12 text-sm leading-6 text-[#6a7f84]",
										children: desc
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "mt-5 flex items-center gap-1 text-sm font-extrabold text-[#07877f]",
										children: ["관련 서비스 ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4 transition group-hover:translate-x-1" })]
									})
								]
							}, title))
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "programs",
					className: "scroll-mt-32 bg-[#fffaf3] py-20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-7xl px-4 sm:px-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col justify-between gap-5 md:flex-row md:items-end",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
								eyebrow: "강남구 7대 특화사업",
								title: "생활 가까이 이어지는 통합돌봄",
								desc: "안전·건강·퇴원·호스피스·운동·방문진료·AI 돌봄까지, 강남구가 집중적으로 연결하는 사업입니다."
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "rounded-full bg-white px-4 py-2 text-xs font-extrabold text-[#07877f] shadow-sm",
								children: "카드를 누르면 상세 내용을 볼 수 있어요"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-6 xl:grid-cols-12",
							children: PROGRAMS.map((program, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setSelectedProgram(program),
								className: `group flex h-full flex-col overflow-hidden rounded-[1.65rem] border border-[#e1e8e2] bg-white text-left shadow-[0_16px_44px_-36px_#174e55] transition duration-300 hover:-translate-y-1.5 hover:border-[#8fd4ca] hover:shadow-[0_26px_58px_-34px_#174e55] ${index < 4 ? "lg:col-span-3 xl:col-span-3" : "lg:col-span-2 xl:col-span-4"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative h-48 overflow-hidden bg-[#eef8f3] sm:h-52 lg:h-48 xl:h-52",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: program.image,
											alt: program.title,
											className: "h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.035]"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#173e47]/20 to-transparent" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "absolute left-4 top-4 rounded-full bg-white/92 px-3 py-1.5 text-[11px] font-black text-[#07877f]",
											children: ["특화사업 ", String(program.no).padStart(2, "0")]
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-1 flex-col p-5 sm:p-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-lg font-black leading-6 text-[#173e47]",
											children: program.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 line-clamp-2 text-sm leading-6 text-[#6a7f84]",
											children: program.tagline
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "mt-auto flex items-center gap-1 pt-5 text-xs font-black text-[#07877f]",
											children: ["자세히 보기 ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4 transition group-hover:translate-x-1" })]
										})
									]
								})]
							}, program.id))
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "service-search",
					className: "scroll-mt-32 bg-[#f1faf7] py-20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-7xl px-4 sm:px-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col justify-between gap-5 md:flex-row md:items-end",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
								eyebrow: "한눈에 찾는 지원",
								title: "필요한 서비스부터 살펴보세요",
								desc: "시설 유형별로 분류해 가까운 돌봄 자원을 빠르게 찾을 수 있습니다."
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/services",
								className: "inline-flex w-fit items-center gap-2 rounded-full bg-[#103e46] px-5 py-3 text-sm font-extrabold text-white",
								children: ["전체 시설 보기 ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
							children: serviceGroups.map(({ label, desc, icon: Icon, color }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/services",
								className: "flex items-center gap-4 rounded-2xl border border-white bg-white p-5 shadow-[0_12px_35px_-30px_#174e55] transition hover:-translate-y-1",
								onClick: () => {
									if (typeof window !== "undefined") sessionStorage.setItem("facilityQuery", label.split("·")[0]);
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `grid h-12 w-12 shrink-0 place-items-center rounded-2xl ${color}`,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5 text-[#173e47]" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-black",
										children: label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs text-[#6a7f84]",
										children: desc
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "ml-auto h-4 w-4 text-[#07988f]" })
								]
							}, label))
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "process",
					className: "scroll-mt-32 bg-white py-20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-7xl px-4 sm:px-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
							eyebrow: "처음이어도 어렵지 않게",
							title: "3단계로 쉽게 이용하세요",
							desc: "복잡한 제도 설명보다 주민이 해야 할 일을 먼저 안내합니다.",
							centered: true
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative mt-12 grid gap-5 md:grid-cols-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-[16%] right-[16%] top-12 hidden border-t-2 border-dashed border-[#a9dcd5] md:block" }), [
								{
									no: "01",
									title: "상황 확인",
									desc: "내게 필요한 도움과 생활 상황을 간단히 확인합니다.",
									icon: UserRoundCheck
								},
								{
									no: "02",
									title: "맞춤 서비스 추천",
									desc: "이용할 수 있는 서비스와 가까운 시설을 살펴봅니다.",
									icon: ClipboardCheck
								},
								{
									no: "03",
									title: "신청·상담 연결",
									desc: "전화 또는 담당 기관으로 바로 연결해 신청합니다.",
									icon: MessageCircleHeart
								}
							].map(({ no, title, desc, icon: Icon }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "relative rounded-[1.7rem] border border-[#e1ece9] bg-[#fffdf9] p-7 text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "relative mx-auto grid h-20 w-20 place-items-center rounded-full border-8 border-white bg-[#dff5f1] text-[#07877f] shadow-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-7 w-7" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
											className: "absolute -right-2 -top-2 grid h-7 w-7 place-items-center rounded-full bg-[#07988f] text-[10px] text-white",
											children: no
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-5 text-xl font-black",
										children: title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm leading-6 text-[#6a7f84]",
										children: desc
									})
								]
							}, no))]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "bg-[#fff7ef] py-20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[1.35fr_0.65fr]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/services",
							className: "group grid min-h-[390px] overflow-hidden rounded-[2rem] bg-[#0b8f86] text-white shadow-[0_25px_60px_-42px_#174e55] sm:grid-cols-[0.78fr_1.22fr]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative z-10 flex flex-col justify-center p-8 sm:p-9",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex w-fit items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-xs font-bold",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4" }), " 우리동네 돌봄지도"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
										className: "mt-6 text-3xl font-black leading-tight",
										children: [
											"내 주변 돌봄기관을",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											"지도에서 확인하세요"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 text-sm leading-7 text-white/75",
										children: "동별 시설과 서비스 유형을 한눈에 살펴보고 주소로 바로 연결할 수 있습니다."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black text-[#07877f]",
										children: ["지도에서 찾기 ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition group-hover:translate-x-1" })]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative min-h-[310px] overflow-hidden bg-[#f5f1e7]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: map_gangnam_default,
									alt: "강남구 우리동네 돌봄지도",
									className: "absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.025]"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute inset-x-4 bottom-4 grid grid-cols-3 overflow-hidden rounded-2xl border border-white/80 bg-white/92 text-center text-[#173e47] shadow-xl backdrop-blur",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "border-r border-[#dcebe8] px-2 py-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
												className: "block text-lg text-[#07877f]",
												children: "22개 동"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] text-[#6a7f84]",
												children: "돌봄 네트워크"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "border-r border-[#dcebe8] px-2 py-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
												className: "block text-lg text-[#d46a3b]",
												children: "285개"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] text-[#6a7f84]",
												children: "복지시설"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "px-2 py-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
												className: "block text-lg text-[#6659b8]",
												children: "맞춤형"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] text-[#6a7f84]",
												children: "지역 정보"
											})]
										})
									]
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							id: "news",
							className: "scroll-mt-32 rounded-[2rem] border border-[#f0ddd0] bg-white p-8 sm:p-10",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-2 rounded-full bg-[#fff0e7] px-3 py-1.5 text-xs font-extrabold text-[#c56239]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneCall, { className: "h-4 w-4" }), " 소식·문의"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "mt-6 text-3xl font-black",
									children: [
										"무엇을 신청해야 할지",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"모르겠다면 전화하세요"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-sm leading-7 text-[#6a7f84]",
									children: "상담원이 현재 상황을 듣고 이용 가능한 돌봄 서비스와 담당 기관을 안내합니다."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "tel:0234469736",
									className: "mt-7 flex items-center justify-between rounded-2xl bg-[#173e47] p-5 text-white",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-white/65",
										children: "강남구 통합돌봄 상담"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-2xl font-black",
										children: "02-3446-9736"
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneCall, { className: "h-7 w-7 text-[#8ee3da]" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-4 flex items-center gap-2 text-xs text-[#71858a]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4 text-[#07988f]" }), " 평일 09:00–18:00 · 통화료는 발신자 부담"]
								})
							]
						})]
					})
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgramDetailDialog, {
				program: selectedProgram,
				open: Boolean(selectedProgram),
				onOpenChange: (open) => {
					if (!open) setSelectedProgram(null);
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
function SectionTitle({ eyebrow, title, desc, centered = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: centered ? "text-center" : "",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-black tracking-[0.16em] text-[#07988f]",
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 text-3xl font-black tracking-[-0.04em] sm:text-4xl",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: `mt-3 text-sm leading-7 text-[#6a7f84] ${centered ? "mx-auto max-w-xl" : "max-w-2xl"}`,
				children: desc
			})
		]
	});
}
//#endregion
export { HomePage as component };

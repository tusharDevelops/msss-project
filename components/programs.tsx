import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { useI18n } from "@/components/i18n-provider"

type Program = {
  title: string
  titleHi: string
  courses: string[]
  level?: string[]
  duration: string
  eligibility: string
  fees: string
}

const programs: Program[] = [
  { 
    title: "Engineering", 
    titleHi: "इंजीनियरिंग", 
    courses: ["B.Tech (CSE, ECE, Mechanical, Civil)", "M.Tech (Specializations)", "Polytechnic Diploma", "Ph.D. Engineering"], 
    level: ["UG", "PG", "Diploma", "Ph.D."],
    duration: "3-4 years",
    eligibility: "10+2 with PCM / Diploma",
    fees: "₹60,000 - ₹2,50,000/year"
  },
  { 
    title: "Pharmacy", 
    titleHi: "फार्मेसी", 
    courses: ["D.Pharm", "B.Pharm", "M.Pharm", "Pharm.D"], 
    level: ["Diploma", "UG", "PG"],
    duration: "2-4 years",
    eligibility: "10+2 with PCB/PCM",
    fees: "₹45,000 - ₹1,80,000/year"
  },
  { 
    title: "Management", 
    titleHi: "प्रबंधन", 
    courses: ["BBA", "MBA (Finance, Marketing, HR, Operations)", "PGDM"], 
    level: ["UG", "PG"],
    duration: "3-2 years",
    eligibility: "10+2 / Graduation",
    fees: "₹50,000 - ₹3,00,000/year"
  },
  { 
    title: "Medical & Dental", 
    titleHi: "चिकित्सा व दंत चिकित्सा", 
    courses: ["MBBS", "BDS", "MDS", "MD/MS Specializations"], 
    level: ["UG", "PG"],
    duration: "4.5-5.5 years",
    eligibility: "NEET Qualified",
    fees: "₹8,00,000 - ₹25,00,000/year"
  },
  { 
    title: "Nursing", 
    titleHi: "नर्सिंग", 
    courses: ["ANM", "GNM", "B.Sc Nursing", "Post Basic B.Sc", "M.Sc Nursing"], 
    level: ["Diploma", "UG", "PG"],
    duration: "1.5-4 years",
    eligibility: "10th/10+2 with Science",
    fees: "₹30,000 - ₹1,20,000/year"
  },
  { 
    title: "Agriculture", 
    titleHi: "कृषि", 
    courses: ["B.Sc Agriculture", "M.Sc Agriculture", "B.Tech Food Technology"], 
    level: ["UG", "PG"],
    duration: "4-2 years",
    eligibility: "10+2 with PCB/PCM",
    fees: "₹40,000 - ₹1,50,000/year"
  },
  { 
    title: "Computer Application", 
    titleHi: "कंप्यूटर एप्लीकेशन", 
    courses: ["BCA", "MCA", "PGDCA", "B.Tech IT"], 
    level: ["UG", "PG", "Diploma"],
    duration: "3-2 years",
    eligibility: "10+2 with Math",
    fees: "₹35,000 - ₹1,80,000/year"
  },
  { 
    title: "Science", 
    titleHi: "विज्ञान", 
    courses: ["B.Sc (PCM, PCB, Chemistry)", "M.Sc", "Ph.D.", "B.Sc Biotechnology"], 
    level: ["UG", "PG", "Ph.D."],
    duration: "3-2 years",
    eligibility: "10+2 with Science",
    fees: "₹25,000 - ₹1,00,000/year"
  },
  { 
    title: "Commerce", 
    titleHi: "वाणिज्य", 
    courses: ["B.Com", "M.Com", "B.Com (Hons)", "CA Foundation"], 
    level: ["UG", "PG"],
    duration: "3-2 years",
    eligibility: "10+2 any stream",
    fees: "₹20,000 - ₹80,000/year"
  },
  { 
    title: "Arts & Humanities", 
    titleHi: "कला व मानविकी", 
    courses: ["BA (English, Hindi, History, Political Science)", "MA", "Ph.D."], 
    level: ["UG", "PG", "Ph.D."],
    duration: "3-2 years",
    eligibility: "10+2 any stream",
    fees: "₹18,000 - ₹75,000/year"
  },
  { 
    title: "Hotel Management", 
    titleHi: "होटल मैनेजमेंट", 
    courses: ["BHM", "Diploma in Hotel Management", "MBA Tourism"], 
    level: ["UG", "Diploma"],
    duration: "3-4 years",
    eligibility: "10+2 any stream",
    fees: "₹60,000 - ₹2,00,000/year"
  },
  { 
    title: "Law", 
    titleHi: "कानून", 
    courses: ["BA LLB", "BBA LLB", "LLB", "LLM"], 
    level: ["Integrated", "UG", "PG"],
    duration: "5-3 years",
    eligibility: "10+2 / Graduation",
    fees: "₹50,000 - ₹2,50,000/year"
  },
  { 
    title: "Education", 
    titleHi: "शिक्षा", 
    courses: ["D.Ed", "B.Ed", "M.Ed", "B.A + B.Ed", "B.Sc + B.Ed"], 
    level: ["Diploma", "UG", "PG", "Integrated"],
    duration: "2-4 years",
    eligibility: "10+2 / Graduation",
    fees: "₹25,000 - ₹1,20,000/year"
  },
  { 
    title: "Paramedical", 
    titleHi: "पैरामेडिकल", 
    courses: ["DMLT", "BMLT", "B.Sc Radiology", "B.Sc Physiotherapy"], 
    level: ["Diploma", "UG"],
    duration: "2-4 years",
    eligibility: "10+2 with PCB",
    fees: "₹40,000 - ₹1,50,000/year"
  },
]

export default function Programs() {
  const { t, lang } = useI18n()
  return (
    <div id="programs" className="max-w-7xl mx-auto">
      <div className="text-center space-y-3 mb-8">
        <h2 className="text-2xl md:text-4xl font-bold">{t('programs.heading')}</h2>
        <p className="text-slate-600">{t('programs.sub')}</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {programs.map((p) => (
          <ProgramCard key={p.title} program={p} />
        ))}
      </div>
    </div>
  )
}

function ProgramCard({ program }: { program: Program }) {
  const { t, lang } = useI18n()
  const title = lang === 'hi' ? `${program.titleHi}` : `${program.title}`

  return (
    <Card className="border bg-white/70 backdrop-blur hover:shadow-lg transition-shadow">
      <CardContent className="p-5">
        <div className="flex items-start justify-between gap-3 mb-4">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
            <div className="text-xs text-slate-500 mt-1">
              {t('programs.duration')}: {program.duration} | {t('programs.fees')}: {program.fees}
            </div>
          </div>
          <div className="flex flex-wrap gap-1">
            <Badge variant="secondary" className="text-xs">Regular</Badge>
            <Badge variant="secondary" className="text-xs">Distance</Badge>
            <Badge variant="secondary" className="text-xs">Online</Badge>
          </div>
        </div>

        <div className="space-y-3">
          <div>
            <div className="text-sm font-medium mb-1">{t('programs.popular')}</div>
            <ul className="text-xs text-slate-700 list-disc pl-4 space-y-0.5">
              {program.courses.slice(0, 3).map((c) => (
                <li key={c}>{c}</li>
              ))}
              {program.courses.length > 3 && (
                <li className="text-slate-500">+{program.courses.length - 3} more</li>
              )}
            </ul>
          </div>

          <div className="grid gap-1 text-xs">
            <div className="flex justify-between">
              <span className="text-slate-500">{t('programs.eligibility')}:</span>
              <span className="text-slate-800 text-right">{program.eligibility}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">{t('programs.acc')}:</span>
              <Badge className="bg-amber-100 text-amber-800 border-amber-200 text-xs">{t('programs.naac')}</Badge>
            </div>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t">
          <Link
            href={`/admissions?program=${encodeURIComponent(program.title)}`}
            className="inline-flex text-sm font-medium text-rose-700 hover:text-rose-800 underline"
          >
            {t('programs.applyFor', { program: title })}
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

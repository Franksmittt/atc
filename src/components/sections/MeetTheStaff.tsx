import Image from "next/image";
import { Car, Clock, Gauge } from "lucide-react";

type StaffNote = {
  label: string;
  text: string;
  icon: typeof Gauge;
};

type StaffMember = {
  name: string;
  role: string;
  heading: string;
  bio: string;
  photo: string;
  photoAlt: string;
  photoOnRight?: boolean;
  notes: StaffNote[];
};

const STAFF: StaffMember[] = [
  {
    name: "Shane",
    role: "Automotive Expert",
    heading: "Meet Shane",
    bio: "Shane brings over 32 years of automotive expertise to Alberton Tyre Clinic, fueled by a lifelong passion for all types of vehicles. Having served the Alberton community for two decades, his approach is built entirely around driver safety. For Shane, the ultimate reward is client gratitude and the quiet satisfaction of knowing he went the extra mile to keep a family secure on the road.",
    photo: "/images/about/staff-shane.jpg",
    photoAlt: "Shane, Automotive Expert at Alberton Tyre Clinic",
    notes: [
      {
        label: "The Golden Rule",
        text: "Always check your tyre pressure. Running them too low causes premature wear on the shoulders, while over-inflating burns through the center tread.",
        icon: Gauge,
      },
      {
        label: "First Car",
        text: "1984 Mazda 323.",
        icon: Car,
      },
      {
        label: "Off the Clock",
        text: "A dedicated family man who spends his downtime enjoying life with his children and grandchildren.",
        icon: Clock,
      },
    ],
  },
  {
    name: "Alex",
    role: "Quality Control Specialist",
    heading: "Meet Alex",
    bio: "Alex brings 32 years of comprehensive automotive experience to the floor, backed by 26 years of deep roots in the Alberton area. He is passionate about every aspect of the tyre industry, but his true focus is on quality control. For Alex, job satisfaction comes from personally inspecting the vehicles in the bay to ensure every fitment is executed perfectly before hand-over.",
    photo: "/images/about/staff-alex.jpg",
    photoAlt: "Alex, Quality Control Specialist at Alberton Tyre Clinic",
    photoOnRight: true,
    notes: [
      {
        label: "The Golden Rule",
        text: "Don't neglect the fundamentals. Maximizing your tyre life comes down to three non-negotiables: regular pressure checks, proper wheel alignment, and routine rotation.",
        icon: Gauge,
      },
      {
        label: "First Car",
        text: "1981 Golf 1.",
        icon: Car,
      },
      {
        label: "Off the Clock",
        text: "Finding a quiet balance at home by tending to his koi pond.",
        icon: Clock,
      },
    ],
  },
];

function StaffProfile({ member }: { member: StaffMember }) {
  return (
    <article className="overflow-hidden rounded-xl bg-white shadow-lg border-t-4 border-primary dark:bg-neutral-800">
      <div
        className={`grid ${
          member.photoOnRight
            ? "md:grid-cols-[1fr_minmax(240px,36%)]"
            : "md:grid-cols-[minmax(240px,36%)_1fr]"
        }`}
      >
        <div
          className={`relative aspect-[4/5] min-h-[280px] h-full bg-neutral-200 md:aspect-auto dark:bg-neutral-700 ${
            member.photoOnRight ? "md:order-2" : ""
          }`}
        >
          <Image
            src={member.photo}
            alt={member.photoAlt}
            fill
            className="object-cover object-top"
            sizes="(min-width: 768px) 36vw, 100vw"
          />
        </div>

        <div className="p-6 text-left sm:p-8 lg:p-10">
          <p className="text-sm font-bold uppercase tracking-wide text-neutral-800 dark:text-white">
            {member.name}
          </p>
          <p className="mt-1 text-primary font-semibold">{member.role}</p>
          <h3 className="mt-3 text-3xl font-extrabold text-neutral-800 dark:text-white sm:text-4xl">
            {member.heading}
          </h3>
          <p className="mt-4 text-base leading-relaxed text-neutral-600 dark:text-neutral-300 sm:text-lg">
            {member.bio}
          </p>

          <ul className="mt-8 space-y-5">
            {member.notes.map((note) => {
              const Icon = note.icon;
              return (
                <li key={note.label} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-bold text-primary">{note.label}</p>
                    <p className="mt-1 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-base">
                      {note.text}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </article>
  );
}

export default function MeetTheStaff() {
  return (
    <section className="bg-neutral-100 py-24 dark:bg-neutral-900">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="mb-12 text-center text-3xl font-extrabold text-neutral-800 dark:text-white sm:text-4xl">
          Meet the Staff Who Guarantee Your Safety
        </h2>

        <div className="space-y-10">
          {STAFF.map((member) => (
            <StaffProfile key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}

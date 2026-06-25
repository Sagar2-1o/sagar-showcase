"use client";

import {
  SiKotlin,
  SiAndroid,
  SiJetpackcompose,
  SiFirebase,
  SiSqlite,
  SiGit,
  SiMaterialdesign,
  SiAndroidstudio,
  SiCplusplus,
  SiPython,
  SiC,
} from "react-icons/si";
import { TbApi, TbLayoutDashboard, TbCode, TbFileCode, TbDatabase, TbShieldLock, TbCloudUpload, TbBinaryTree2, TbDatabaseCog } from "react-icons/tb";
import { IconType } from "react-icons";
import { LuLayoutGrid } from "react-icons/lu";

interface Skill {
  name: string;
  icon: IconType;
  color: string;
}

/* Row 1: scrolls Left → Right */
const row1Skills: Skill[] = [
  { name: "Kotlin", icon: SiKotlin, color: "#7F52FF" },
  { name: "Android SDK", icon: SiAndroid, color: "#3DDC84" },
  { name: "MVVM", icon: TbLayoutDashboard, color: "#8B5CF6" },
  { name: "XML Layouts", icon: TbFileCode, color: "#E44D26" },
  { name: "Room Database", icon: SiSqlite, color: "#003B57" },
  { name: "Material Design", icon: SiMaterialdesign, color: "#757575" },
  { name: "Jetpack Compose", icon: SiJetpackcompose, color: "#4285F4" },
  { name: "SharedPreferences", icon: TbDatabase, color: "#10B981" },
  { name: "C", icon: SiC, color: "#A8B9CC" },
  { name: "C++", icon: SiCplusplus, color: "#00599C" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
];

/* Row 2: scrolls Right → Left */
const row2Skills: Skill[] = [
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "REST APIs", icon: TbApi, color: "#06B6D4" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Android Studio", icon: SiAndroidstudio, color: "#3DDC84" },
  { name: "OOP", icon: TbCode, color: "#F59E0B" },
  { name: "DSA", icon: TbBinaryTree2, color: "#EC4899" },
  { name: "Realtime DB", icon: TbDatabaseCog, color: "#FFA000" },
  { name: "Firebase Auth", icon: TbShieldLock, color: "#FF7043" },
  { name: "Firebase Storage", icon: TbCloudUpload, color: "#42A5F5" },
  { name: "Material Design", icon: LuLayoutGrid, color: "#757575" },
];

function SkillPill({ skill }: { skill: Skill }) {
  const Icon = skill.icon;
  return (
    <div className="flex items-center gap-3 bg-[#111] border border-[#222] rounded-full px-5 py-3 shrink-0 select-none hover:border-[#333] transition-colors duration-200">
      <Icon size={18} style={{ color: skill.color }} className="shrink-0" />
      <span className="text-[13.5px] font-medium text-[#ccc] whitespace-nowrap">
        {skill.name}
      </span>
    </div>
  );
}

function MarqueeRow({
  skills,
  direction,
}: {
  skills: Skill[];
  direction: "left" | "right";
}) {
  /* Duplicate 4× so the strip is wide enough for seamless looping */
  const items = [...skills, ...skills, ...skills, ...skills];
  const animClass =
    direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

  return (
    <div className="flex gap-4 w-max">
      <div className={`flex gap-4 ${animClass}`}>
        {items.map((skill, i) => (
          <SkillPill key={`${skill.name}-${i}`} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-20 px-0">

      {/* Marquee Container with edge fades */}
      <div className="relative overflow-hidden">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

        {/* Row 1: Left to Right */}
        <div className="mb-4 overflow-hidden">
          <MarqueeRow skills={row1Skills} direction="right" />
        </div>

        {/* Row 2: Right to Left */}
        <div className="overflow-hidden">
          <MarqueeRow skills={row2Skills} direction="left" />
        </div>
      </div>
    </section>
  );
}

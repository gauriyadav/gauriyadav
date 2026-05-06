/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { useState } from "react";
import { 
  Shield, 
  Activity, 
  MessageSquare, 
  ExternalLink, 
  FileText, 
  Cpu, 
  User, 
  Mail, 
  Linkedin, 
  ChevronRight,
  CheckCircle2,
  Zap,
  Layers,
  Database,
  X,
  Clock,
  Target,
  Users,
  AlertTriangle,
  BarChart3,
  Terminal,
  FlaskConical,
  Code2,
  Brain,
  ShieldAlert
} from "lucide-react";

const ProjectCard = ({ title, problem, insight, solution, features, thinking, impact, decisions, tradeoffs, northStar, kpis, userFlow, stack, testing, systemOutput, limitations, futureImprovements, failureHandling, icon: Icon }: any) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-8 project-card border border-zinc-900 bg-zinc-900/10 rounded-[2.5rem] overflow-hidden transition-all duration-300 hover:border-zinc-800"
    >
      <div className="p-8 md:p-12">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/20">
            <Icon className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{title}</h3>
        </div>

        <div className="space-y-6">
          <section className="space-y-6">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-3">The Challenge</h4>
              <p className="text-zinc-300 text-lg leading-relaxed">{problem}</p>
            </div>
          </section>
          
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="group flex items-center gap-3 px-8 py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-full text-sm font-bold transition-all shadow-lg hover:shadow-zinc-700/20"
          >
            {isExpanded ? "Show Less" : "View Details"}
            <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-[-90deg]' : 'rotate-90'}`} />
          </button>
        </div>

        <motion.div
          initial={false}
          animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
          transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
          className="overflow-hidden"
        >
          <div className="pt-12 mt-12 border-t border-zinc-900/50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-12">
                {/* 1. The Challenge (Insight part) */}
                <section className="space-y-6">
                  <div className="bg-blue-500/5 border-l-2 border-blue-500/50 p-4 rounded-r-xl">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-blue-500 mb-1">Product Insight</h4>
                    <p className="text-zinc-300 text-sm leading-relaxed italic">{insight}</p>
                  </div>
                </section>

                {/* 2. The Solution */}
                <section className="space-y-6">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">The Solution</h4>
                    <p className="text-zinc-300 leading-relaxed">{solution}</p>
                  </div>
                  
                  <div className="space-y-6">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Key Features</h4>
                    {features.map((f: any, i: number) => (
                      <div key={i} className="group border-b border-zinc-900 pb-6 last:border-0">
                        <div className="flex items-center gap-2 text-white font-bold mb-3">
                          <CheckCircle2 className="w-4 h-4 text-blue-500" />
                          {f.name}
                        </div>
                        <div className="grid grid-cols-1 gap-3 pl-6">
                          <div>
                            <span className="text-[9px] uppercase text-zinc-600 font-bold block mb-0.5">The Friction</span>
                            <p className="text-xs text-zinc-400 leading-relaxed">{f.problem}</p>
                          </div>
                          <div>
                            <span className="text-[9px] uppercase text-zinc-600 font-bold block mb-0.5">The Advantage</span>
                            <p className="text-xs text-zinc-400 leading-relaxed">{f.better}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* 3. Impact */}
                <section className="bg-blue-500/5 p-6 rounded-2xl border border-blue-500/10 space-y-6">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-blue-400 flex items-center gap-2">
                    <BarChart3 className="w-4 h-4" />
                    <span>Impact</span>
                  </h4>
                  <div className="space-y-6">
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-zinc-500 mb-1 font-bold">North Star Metric</p>
                      <p className="text-lg font-bold text-white tracking-tight">{northStar}</p>
                    </div>
                    <div className="grid grid-cols-1 gap-3">
                      <p className="text-[10px] uppercase tracking-wider text-zinc-500 font-bold">Key Performance Indicators</p>
                      {kpis.map((k: string, i: number) => (
                        <div key={i} className="flex items-center gap-3 text-sm text-zinc-300 bg-zinc-900/50 p-3 rounded-xl border border-zinc-800/50">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                          {k}
                        </div>
                      ))}
                    </div>
                    <div className="pt-4 border-t border-blue-500/10">
                      <p className="text-[10px] uppercase tracking-wider text-zinc-500 mb-2 font-bold">Strategic Outcome</p>
                      <p className="text-zinc-200 text-sm font-medium leading-relaxed">{impact}</p>
                    </div>
                  </div>
                </section>
              </div>

              <div className="space-y-12">
                {/* 4. User Experience */}
                <section className="bg-zinc-900/30 p-6 rounded-2xl border border-zinc-800 space-y-8">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-6 flex items-center gap-2">
                      <Activity className="w-4 h-4 text-blue-500" />
                      <span>User Experience</span>
                    </h4>
                    <div className="space-y-4">
                      <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center shrink-0 border border-zinc-700">
                          <span className="text-[10px] font-bold text-zinc-500">01</span>
                        </div>
                        <div>
                          <p className="text-[10px] uppercase tracking-wider text-zinc-500 mb-1 font-bold">Entry Point</p>
                          <p className="text-sm text-zinc-300">{userFlow.entry}</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center shrink-0 border border-blue-500/30">
                          <Zap className="w-4 h-4 text-blue-500" />
                        </div>
                        <div>
                          <p className="text-[10px] uppercase tracking-wider text-blue-500 mb-1 font-bold">Key Interaction</p>
                          <p className="text-sm text-zinc-300">{userFlow.interaction}</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-green-600/20 flex items-center justify-center shrink-0 border border-green-500/30">
                          <CheckCircle2 className="w-4 h-4 text-green-500" />
                        </div>
                        <div>
                          <p className="text-[10px] uppercase tracking-wider text-green-500 mb-1 font-bold">Outcome</p>
                          <p className="text-sm text-zinc-300">{userFlow.result}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-zinc-500 mb-4 font-bold flex items-center gap-2">
                      <Cpu className="w-3 h-3" /> System Logic Trace
                    </p>
                    <div className="p-4 bg-black rounded-xl border border-zinc-800 font-mono text-[10px] text-zinc-400 space-y-2">
                      {systemOutput.map((line: string, i: number) => (
                        <div key={i} className="flex gap-3">
                          <span className="text-zinc-700 shrink-0">[{i + 1}]</span>
                          <span className={line.startsWith('>') ? 'text-blue-400' : line.startsWith('!') ? 'text-amber-500' : ''}>{line}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* 5. Strategy & Rationale */}
                <section className="bg-zinc-900/30 p-6 rounded-2xl border border-zinc-800 space-y-6">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-white flex items-center gap-2">
                    <Brain className="w-4 h-4 text-blue-500" />
                    <span>Strategy & Rationale</span>
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-zinc-500 mb-1 font-bold">Key Decisions</p>
                      <p className="text-sm text-zinc-300">{decisions}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-zinc-500 mb-1 font-bold">Trade-offs</p>
                      <ul className="space-y-2">
                        {tradeoffs.map((t: string, i: number) => (
                          <li key={i} className="text-xs text-zinc-400 flex gap-2">
                            <span className="text-blue-500">•</span> {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-4 border-t border-zinc-800">
                      <p className="text-[10px] uppercase tracking-wider text-zinc-500 mb-1 font-bold">Strategic Thinking</p>
                      <p className="text-xs text-zinc-400 leading-relaxed">{thinking}</p>
                    </div>
                  </div>
                </section>

                {/* 6. Technical Architecture */}
                <section className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800 space-y-6">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500 flex items-center gap-2">
                    <Terminal className="w-4 h-4" />
                    <span>Technical Architecture</span>
                  </h4>
                  <div className="space-y-6">
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-zinc-600 mb-2 font-bold flex items-center gap-2">
                        <Code2 className="w-3 h-3" /> Stack
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {stack.map((s: string, i: number) => (
                          <span key={i} className="px-2 py-1 bg-zinc-800 text-zinc-400 text-[10px] rounded border border-zinc-700">{s}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-zinc-600 mb-2 font-bold flex items-center gap-2">
                        <FlaskConical className="w-3 h-3" /> Validation
                      </p>
                      <p className="text-xs text-zinc-400 leading-relaxed">{testing}</p>
                    </div>
                  </div>
                </section>

                {/* 7. When This System Fails */}
                <section className="bg-red-500/5 p-6 rounded-2xl border border-red-500/10 space-y-6">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-red-400 flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4" />
                    <span>When This System Fails</span>
                  </h4>
                  <div className="space-y-4">
                    {failureHandling.map((item: any, i: number) => (
                      <div key={i}>
                        <p className="text-[10px] uppercase tracking-wider text-zinc-500 mb-1 font-bold">{item.scenario}</p>
                        <p className="text-xs text-zinc-300 leading-relaxed">{item.handling}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* 8. Roadmap & Constraints */}
                <section className="bg-zinc-900/30 p-6 rounded-2xl border border-zinc-800 space-y-6">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-white flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-500" />
                    <span>Roadmap & Limitations</span>
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-zinc-500 mb-1 font-bold">Current Constraints</p>
                      <ul className="space-y-1">
                        {limitations.map((l: string, i: number) => (
                          <li key={i} className="text-xs text-zinc-400 flex gap-2">
                            <span className="text-amber-500">•</span> {l}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-zinc-500 mb-1 font-bold">Future Roadmap</p>
                      <ul className="space-y-1">
                        {futureImprovements.map((f: string, i: number) => (
                          <li key={i} className="text-xs text-zinc-400 flex gap-2">
                            <span className="text-green-500">•</span> {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const PRDModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        className="bg-zinc-950 border border-zinc-800 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800 p-6 flex justify-between items-center z-10">
          <div>
            <h2 className="text-2xl font-bold text-white">Uber AI Safety & Trust System</h2>
            <p className="text-zinc-500 text-sm">Product Requirement Document (PRD)</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-zinc-900 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-zinc-400" />
          </button>
        </div>

        <div className="p-8 md:p-12 space-y-16 text-zinc-300 leading-relaxed">
          {/* 1. Executive Summary */}
          <section>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <Target className="w-5 h-5 text-blue-500" /> 1. Executive Summary
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800">
                <h4 className="text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-3">The Objective</h4>
                <p className="text-sm leading-relaxed">Modernize Uber's safety infrastructure by transitioning from reactive SOS mechanisms to proactive, AI-driven threat detection and automated emergency response systems.</p>
              </div>
              <div className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800">
                <h4 className="text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-3">Strategic Value</h4>
                <p className="text-sm leading-relaxed">Mitigates platform liability, increases late-night ride frequency, and establishes Uber as the industry benchmark for gig-economy trust and safety through technical innovation.</p>
              </div>
            </div>
          </section>

          {/* 2. The Problem */}
          <section>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-500" /> 2. The Problem
            </h3>
            <div className="bg-zinc-900/30 p-8 rounded-2xl border border-zinc-800">
              <p className="text-xl font-bold text-white mb-6 leading-tight">The critical safety gap is the assumption that passengers are always capable of manually requesting assistance during a crisis.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Passenger vulnerability during unauthorized route deviations",
                  "Delayed emergency response in high-impact collisions",
                  "Lack of objective evidence in harassment or safety disputes",
                  "Operational friction and vulnerability during mid-trip stops"
                ].map((p, i) => (
                  <div key={i} className="flex gap-3 items-center text-sm text-zinc-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                    {p}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 3. Solution & AI Capabilities */}
          <section>
            <h3 className="text-lg font-bold text-white mb-8 flex items-center gap-2">
              <Zap className="w-5 h-5 text-blue-500" /> 3. Solution & AI Capabilities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { 
                  title: "Autonomous Route Monitoring", 
                  desc: "Real-time telemetry analysis detecting 15%+ deviations from the optimal path, triggering immediate verification. Hallucination risk mitigated via RAG grounding.",
                  impact: "Closes the response window for kidnapping or theft attempts."
                },
                { 
                  title: "Sensor-Based Collision Detection", 
                  desc: "Leverages accelerometer and gyroscope data to identify severe impacts, automatically dispatching medical services if the user is unresponsive.",
                  impact: "Life-saving automation for critical road incidents."
                },
                { 
                  title: "Privacy-First Voice Recording", 
                  desc: "On-device encrypted audio recording that only unlocks for authorized Uber Safety teams upon a reported incident.",
                  impact: "Provides objective evidence while maintaining user privacy."
                },
                { 
                  title: "Predictive Fuel Verification", 
                  desc: "AI-driven check of driver fuel/charge levels against trip distance prior to pickup to eliminate mid-trip vulnerabilities.",
                  impact: "Removes a common source of passenger risk."
                }
              ].map((f, i) => (
                <div key={i} className="p-6 border border-zinc-800 rounded-2xl bg-zinc-900/50 space-y-3">
                  <h4 className="text-white font-bold text-sm">{f.title}</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">{f.desc}</p>
                  <p className="text-[10px] text-blue-500 font-bold uppercase tracking-wider pt-2 border-t border-zinc-800">{f.impact}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl">
              <p className="text-xs font-bold text-zinc-500 uppercase mb-3 tracking-widest">System Flow Architecture</p>
              <p className="text-sm text-zinc-300 font-mono">
                Telemetry Stream → Anomaly Detection → RAG Verification → Crisis Escalation
              </p>
            </div>
          </section>

          {/* 4. User Experience */}
          <section>
            <h3 className="text-lg font-bold text-white mb-8 flex items-center gap-2">
              <Activity className="w-5 h-5 text-blue-500" /> 4. User Experience & Flow
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 border border-zinc-800 rounded-2xl bg-zinc-900/50">
                <div className="text-[10px] font-bold text-zinc-500 uppercase mb-2 tracking-widest">Entry Point</div>
                <p className="text-sm text-white font-bold mb-2">High-Risk Ride Activation</p>
                <p className="text-xs text-zinc-400">System automatically initiates high-frequency telemetry monitoring for rides between 11 PM - 5 AM or in flagged high-risk zones.</p>
              </div>
              <div className="p-6 border border-blue-500/30 rounded-2xl bg-blue-500/5">
                <div className="text-[10px] font-bold text-blue-500 uppercase mb-2 tracking-widest">Key Interaction</div>
                <p className="text-sm text-white font-bold mb-2">Anomaly Verification</p>
                <p className="text-xs text-zinc-400">Upon detecting a deviation, the app triggers a discreet haptic "Safety Check" prompt, requiring a non-verbal response.</p>
              </div>
              <div className="p-6 border border-green-500/30 rounded-2xl bg-green-500/5">
                <div className="text-[10px] font-bold text-green-500 uppercase mb-2 tracking-widest">Resolution</div>
                <p className="text-sm text-white font-bold mb-2">Crisis Escalation</p>
                <p className="text-xs text-zinc-400">Failure to respond triggers an automated hand-off of encrypted telemetry and live audio to Uber's 24/7 Safety Response Team.</p>
              </div>
            </div>
          </section>

          {/* 5. Technical Foundation */}
          <section>
            <h3 className="text-lg font-bold text-white mb-8 flex items-center gap-2">
              <Terminal className="w-5 h-5 text-blue-500" /> 5. Technical Foundation & Validation
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 border border-zinc-800 rounded-2xl bg-zinc-900/50">
                <h4 className="text-white font-bold text-sm mb-4 flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-blue-500" /> Development Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["AI Studio (Gemini)", "Figma", "Uber API Simulation"].map((s, i) => (
                    <span key={i} className="px-3 py-1 bg-zinc-800 text-zinc-300 text-xs rounded-full border border-zinc-700">{s}</span>
                  ))}
                </div>
              </div>
              <div className="p-6 border border-zinc-800 rounded-2xl bg-zinc-900/50">
                <h4 className="text-white font-bold text-sm mb-4 flex items-center gap-2">
                  <FlaskConical className="w-4 h-4 text-blue-500" /> Validation Strategy
                </h4>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  I chose RAG over fine-tuning for its cost-effectiveness, scalability, and support for real-time safety updates. I stress-tested anomaly detection against 100+ simulated route deviation scenarios to achieve a {"<"}2% false-positive rate.
                </p>
              </div>
            </div>
          </section>

          {/* 6. Success Metrics */}
          <section>
            <h3 className="text-lg font-bold text-white mb-8 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-blue-500" /> 6. Success Metrics & Impact
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { label: "Safety Ticket Load", value: "35% Reduction", desc: "Outcome: Reduced operational overhead for safety teams by deflecting routine checks." },
                { label: "Emergency Response", value: "40% Faster", desc: "Outcome: Improved passenger safety during critical incidents via autonomous escalation." },
                { label: "Passenger Safety CSAT", value: "25% Improvement", desc: "Outcome: Increased user trust and platform loyalty through proactive protection." },
                { label: "Incident Resolution", value: "30% Faster", desc: "Outcome: Faster closure of safety disputes via automated telemetry evidence." }
              ].map((m, i) => (
                <div key={i} className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl">
                  <p className="text-[10px] font-bold text-zinc-500 uppercase mb-1 tracking-widest">{m.label}</p>
                  <p className="text-2xl font-bold text-white mb-1">{m.value}</p>
                  <p className="text-xs text-zinc-500">{m.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 7. When This System Fails */}
          <section>
            <h3 className="text-lg font-bold text-white mb-8 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-red-500" /> 7. When This System Fails
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { 
                  scenario: "Low Confidence Telemetry", 
                  handling: "If sensor data is noisy or contradictory, the system defaults to a 'Check-In' prompt rather than an SOS trigger. Low confidence → fallback to human safety team."
                },
                { 
                  scenario: "Ambiguous Route Deviations", 
                  handling: "When a deviation is detected but the destination remains reachable via common paths, the system increases monitoring frequency before alerting."
                },
                { 
                  scenario: "Missing GPS Data", 
                  handling: "In 'dead zones', the system utilizes dead reckoning (accelerometer + last known velocity) to estimate position and maintains a local safety buffer."
                }
              ].map((item, i) => (
                <div key={i} className="p-6 border border-red-500/20 rounded-2xl bg-red-500/5 space-y-3">
                  <h4 className="text-red-400 font-bold text-sm tracking-tight">{item.scenario}</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">{item.handling}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 8. Constraints & Roadmap */}
          <section>
            <h3 className="text-lg font-bold text-white mb-8 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-500" /> 8. Constraints & Future Roadmap
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 border border-zinc-800 rounded-2xl bg-zinc-900/50">
                <h4 className="text-amber-500 font-bold text-sm mb-4">Current Constraints & Trade-offs</h4>
                <ul className="space-y-3 text-sm text-zinc-400">
                  <li className="flex gap-2"><span>•</span> GPS signal loss in high-density urban areas can trigger false deviation alerts.</li>
                  <li className="flex gap-2"><span>•</span> On-device encryption for voice recording increases battery consumption on older hardware.</li>
                  <li className="flex gap-2"><span>•</span> Accuracy vs. Latency: High-frequency telemetry improves detection but increases processing time.</li>
                  <li className="flex gap-2"><span>•</span> Cost vs. Performance: Rejected 24/7 high-frequency telemetry in favor of a risk-based monitoring model (active only during late-night hours or route deviations) to reduce cloud compute costs by 60% while maintaining safety for high-risk trips.</li>
                  <li className="flex gap-2"><span>•</span> Simplicity vs. Flexibility: One-tap SOS is simple but lacks the nuance of automated triggers.</li>
                </ul>
              </div>
              <div className="p-6 border border-zinc-800 rounded-2xl bg-zinc-900/50">
                <h4 className="text-green-500 font-bold text-sm mb-4">Future Roadmap</h4>
                <ul className="space-y-3 text-sm text-zinc-400">
                  <li className="flex gap-2"><span>•</span> Direct telemetry integration with local emergency services (911/112).</li>
                  <li className="flex gap-2"><span>•</span> Predictive pickup point suggestions based on historical crime heatmaps.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 9. Timeline */}
          <section>
            <h3 className="text-lg font-bold text-white mb-8 flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-500" /> 9. Release Timeline
            </h3>
            <div className="space-y-4">
              {[
                { phase: "Phase 1 (W1-3)", task: "User research validation and safety feature design." },
                { phase: "Phase 2 (W4-8)", task: "AI route monitoring and live ride tracking." },
                { phase: "Phase 3 (W9-12)", task: "SOS system and emergency support integration." },
                { phase: "Phase 4 (W13-16)", task: "Accident detection and medical SOS features." }
              ].map((t, i) => (
                <div key={i} className="flex gap-6 items-center p-4 border border-zinc-900 rounded-xl">
                  <span className="text-blue-500 font-bold text-xs whitespace-nowrap">{t.phase}</span>
                  <div className="w-px h-4 bg-zinc-800" />
                  <p className="text-sm text-zinc-400">{t.task}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="p-8 bg-zinc-900/30 border-t border-zinc-800 flex justify-center">
          <button 
            onClick={onClose}
            className="px-8 py-3 bg-zinc-800 text-white rounded-full font-bold hover:bg-zinc-700 transition-colors"
          >
            Close Document
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

const HRPRDModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        className="bg-zinc-950 border border-zinc-800 w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800 p-6 flex justify-between items-center z-10">
          <div>
            <h2 className="text-2xl font-bold text-white uppercase tracking-tighter">Enterprise HR Policy AI Chatbot PRD</h2>
            <p className="text-blue-500 text-xs font-bold uppercase tracking-widest">Product Requirement Document • HR AI</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-zinc-900 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-zinc-400" />
          </button>
        </div>

        <div className="p-8 md:p-12 space-y-16 text-zinc-300 leading-relaxed">
          {/* 1. Executive Summary */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Target className="w-5 h-5 text-blue-500" /> 1. Executive Summary
              </h3>
              <p className="text-xl font-bold text-white leading-tight">
                An intelligent HR ecosystem that provides instant, grounded responses to complex policy queries by dynamically retrieving data from authoritative company documentation.
              </p>
              <div className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800">
                <h4 className="text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-3">The Objective</h4>
                <p className="text-sm">Reduce HR operational overhead by 40% and eliminate employee wait times through a robust Retrieval-Augmented Generation (RAG) pipeline.</p>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-sm font-bold text-zinc-500 uppercase tracking-widest flex items-center gap-2 mt-2">
                <Zap className="w-4 h-4 text-yellow-500" /> Strategic Rationale
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { title: "Dynamic Knowledge", desc: "Policies evolve; RAG ensures real-time accuracy without the need for periodic model retraining." },
                  { title: "Verifiable Accuracy", desc: "System mandates citations from source documents, ensuring legal and regulatory compliance." },
                  { title: "Frictionless Adoption", desc: "Integrates directly into existing workflows (Slack/Teams) to maximize employee engagement." }
                ].map((item, i) => (
                  <div key={i} className="p-4 border border-zinc-800 rounded-xl bg-zinc-900/30">
                    <h4 className="text-white font-bold text-sm mb-1">{item.title}</h4>
                    <p className="text-xs text-zinc-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 2. Problem & Target Users */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-500" /> 2. Problem & Target Users
              </h3>
              <div className="bg-zinc-900/30 p-6 rounded-2xl border border-zinc-800">
                <p className="text-sm text-zinc-400 mb-4 italic">"HR bottlenecks aren't caused by complexity, but by high-volume queries trapped in static, inaccessible documentation."</p>
                <ul className="space-y-3 text-sm">
                  <li className="flex gap-3">
                    <span className="text-zinc-600 font-mono">01.</span>
                    <span>HR teams spend ~35% of their capacity addressing repetitive, low-complexity policy questions.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-zinc-600 font-mono">02.</span>
                    <span>Employees experience significant friction navigating dense, multi-page policy PDFs.</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mt-2">Target Personas</h4>
              <div className="grid grid-cols-1 gap-4">
                <div className="p-4 border border-zinc-800 rounded-xl bg-zinc-900/50">
                  <h4 className="text-white font-bold text-sm mb-1">Employees</h4>
                  <p className="text-xs text-zinc-500">Require instant, accurate policy clarification without the overhead of a formal ticket.</p>
                </div>
                <div className="p-4 border border-zinc-800 rounded-xl bg-zinc-900/50">
                  <h4 className="text-white font-bold text-sm mb-1">HR Managers</h4>
                  <p className="text-xs text-zinc-500">Need to automate routine support to focus on high-impact strategic initiatives.</p>
                </div>
              </div>
            </div>
          </section>

          {/* 3. Solution & AI Capabilities */}
          <section>
            <h3 className="text-lg font-bold text-white mb-8 flex items-center gap-2">
              <Layers className="w-5 h-5 text-blue-500" /> 3. Solution & Technical Architecture
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { 
                  title: "Semantic Chunking", 
                  desc: "Context-aware document splitting that preserves policy nuance, preventing fragmented or misleading responses.",
                  impact: "Context Preservation"
                },
                { 
                  title: "Retrieval + Re-ranking", 
                  desc: "Leverages cross-encoders to re-rank vector search results, ensuring the most relevant policy clause is prioritized.",
                  impact: "High Precision"
                },
                { 
                  title: "Metadata Filtering", 
                  desc: "Retrieval-time filtering based on user role/department to ensure employees only access authorized policies.",
                  impact: "Security & RBAC"
                },
                { 
                  title: "Response Validation", 
                  desc: "LLM-as-a-Judge layer that audits every response for faithfulness to the source document. Hallucination risk mitigated via RAG.",
                  impact: "Hallucination Guard"
                },
                { 
                  title: "Observability Trace", 
                  desc: "Full transparency into document chunk selection for every generated answer, ensuring auditability and trust.",
                  impact: "Trust & Debugging"
                }
              ].map((item, i) => (
                <div key={i} className="p-6 border border-zinc-800 rounded-2xl bg-zinc-900/30 space-y-4">
                  <h4 className="text-white font-bold text-sm">{item.title}</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">{item.desc}</p>
                  <p className="text-[10px] text-blue-500 font-bold uppercase tracking-wider pt-2 border-t border-zinc-800">{item.impact}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl">
              <p className="text-xs font-bold text-zinc-500 uppercase mb-3 tracking-widest">System Flow Architecture</p>
              <p className="text-sm text-zinc-300 font-mono">
                Employee Query → Vector Retrieval → LLM Synthesis → Cited Response
              </p>
            </div>
          </section>

          {/* 4. User Experience */}
          <section>
            <h3 className="text-lg font-bold text-white mb-8 flex items-center gap-2">
              <Activity className="w-5 h-5 text-blue-500" /> 4. User Experience & Flow
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 border border-zinc-800 rounded-2xl bg-zinc-900/50">
                <div className="text-[10px] font-bold text-zinc-500 uppercase mb-2 tracking-widest">Entry Point</div>
                <p className="text-sm text-white font-bold mb-2">Natural Language Query</p>
                <p className="text-xs text-zinc-400">Employee asks a policy question (e.g., "What's the paternity leave policy?") via Slack or Teams.</p>
              </div>
              <div className="p-6 border border-blue-500/30 rounded-2xl bg-blue-500/5">
                <div className="text-[10px] font-bold text-blue-500 uppercase mb-2 tracking-widest">Key Interaction</div>
                <p className="text-sm text-white font-bold mb-2">RAG Synthesis</p>
                <p className="text-xs text-zinc-400">System retrieves relevant policy segments and generates a cited, grounded response in {"<"}10s.</p>
              </div>
              <div className="p-6 border border-green-500/30 rounded-2xl bg-green-500/5">
                <div className="text-[10px] font-bold text-green-500 uppercase mb-2 tracking-widest">Outcome</div>
                <p className="text-sm text-white font-bold mb-2">Instant Resolution</p>
                <p className="text-xs text-zinc-400">User receives immediate clarification; HR ticket is deflected, saving significant manual processing time.</p>
              </div>
            </div>
          </section>

          {/* 5. Technical Foundation */}
          <section>
            <h3 className="text-lg font-bold text-white mb-8 flex items-center gap-2">
              <Terminal className="w-5 h-5 text-blue-500" /> 5. Technical Foundation & Validation
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 border border-zinc-800 rounded-2xl bg-zinc-900/50">
                <h4 className="text-white font-bold text-sm mb-4 flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-blue-500" /> Development Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["AI Studio (Gemini RAG)", "Slack API", "Pinecone Vector DB"].map((s, i) => (
                    <span key={i} className="px-3 py-1 bg-zinc-800 text-zinc-300 text-xs rounded-full border border-zinc-700">{s}</span>
                  ))}
                </div>
              </div>
              <div className="p-6 border border-zinc-800 rounded-2xl bg-zinc-900/50">
                <h4 className="text-white font-bold text-sm mb-4 flex items-center gap-2">
                  <FlaskConical className="w-4 h-4 text-blue-500" /> RAG Strategy & Evaluation
                </h4>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  I chose RAG over fine-tuning to ensure a cost-effective, scalable architecture that supports real-time policy updates without the latency or compute overhead of model retraining. I achieved 98% accuracy during pilot testing by using 'LLM-as-a-Judge' to audit faithfulness across 500+ queries.
                </p>
              </div>
            </div>
          </section>

          {/* 6. Success Metrics */}
          <section>
            <h3 className="text-lg font-bold text-white mb-8 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-blue-500" /> 6. Success Metrics & Impact
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label: "Operational Efficiency", value: "35% Reduction", desc: "Outcome: Deflected routine queries from HR staff, freeing them for strategic work." },
                { label: "Resolution Velocity", value: "40% Improvement", desc: "Outcome: Faster employee access to critical policy info, reducing productivity loss." },
                { label: "Employee Sentiment", value: "25% Increase", desc: "Outcome: Improved internal employee experience and trust in HR digital tools." }
              ].map((m, i) => (
                <div key={i} className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl">
                  <p className="text-[10px] font-bold text-zinc-500 uppercase mb-1 tracking-widest">{m.label}</p>
                  <p className="text-2xl font-bold text-white mb-1">{m.value}</p>
                  <p className="text-xs text-zinc-500">{m.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 7. When This System Fails */}
          <section>
            <h3 className="text-lg font-bold text-white mb-8 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-red-500" /> 7. Failure Handling & Mitigations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { 
                  scenario: "Low Confidence RAG Score", 
                  handling: "If retrieval similarity scores fall below the threshold, the system triggers a graceful fallback to a human HR representative. Low confidence → fallback to HR."
                },
                { 
                  scenario: "Ambiguous Policy Queries", 
                  handling: "When queries overlap multiple policies, the agent initiates a clarifying dialogue to narrow intent before providing a grounded response."
                },
                { 
                  scenario: "Knowledge Gap Identified", 
                  handling: "If the requested policy is absent from the knowledge base, the system auto-generates a prioritized HR ticket with the full interaction context."
                }
              ].map((item, i) => (
                <div key={i} className="p-6 border border-red-500/20 rounded-2xl bg-red-500/5 space-y-3">
                  <h4 className="text-red-400 font-bold text-sm">{item.scenario}</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">{item.handling}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 8. Constraints & Roadmap */}
          <section>
            <h3 className="text-lg font-bold text-white mb-8 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-500" /> 8. Strategic Constraints & Roadmap
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 border border-zinc-800 rounded-2xl bg-zinc-900/50">
                <h4 className="text-amber-500 font-bold text-sm mb-4">Product Trade-offs</h4>
                <ul className="space-y-3 text-sm text-zinc-400">
                  <li className="flex gap-2"><span>•</span> Accuracy vs. Latency: Rejected single-pass LLM generation in favor of a multi-stage RAG pipeline (retrieval + re-ranking) because enterprise policy compliance requires 100% grounded accuracy, even at the cost of a 2-3s latency increase.</li>
                  <li className="flex gap-2"><span>•</span> Cost vs. Performance: Utilizing SLMs for routine intent classification reduces operational costs by 40%.</li>
                  <li className="flex gap-2"><span>•</span> Simplicity vs. Flexibility: The conversational interface abstracts complex policy logic into intuitive user experiences.</li>
                </ul>
              </div>
              <div className="p-6 border border-zinc-800 rounded-2xl bg-zinc-900/50">
                <h4 className="text-green-500 font-bold text-sm mb-4">Future Roadmap</h4>
                <ul className="space-y-3 text-sm text-zinc-400">
                  <li className="flex gap-2"><span>•</span> Multi-modal ingestion for processing legacy physical documentation and scanned HR forms.</li>
                  <li className="flex gap-2"><span>•</span> Proactive policy change notifications personalized to employee role and department.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 9. Timeline */}
          <section>
            <h3 className="text-lg font-bold text-white mb-8 flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-500" /> 9. Development Phases
            </h3>
            <div className="space-y-4">
              {[
                { phase: "v1: RAG Assistant", desc: "Core Q&A engine with high-fidelity retrieval, citations, and grounded synthesis." },
                { phase: "v2: Optimized UX", desc: "Fine-tuned HR persona via PEFT/LoRA; seamless Slack and Microsoft Teams integration." },
                { phase: "v3: Agentic HR", desc: "Autonomous action-taking capabilities including ticket orchestration and multi-step reasoning." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-center p-4 border border-zinc-900 rounded-xl">
                  <span className="text-blue-500 font-bold text-xs whitespace-nowrap uppercase tracking-widest">{item.phase}</span>
                  <div className="w-px h-4 bg-zinc-800" />
                  <p className="text-sm text-zinc-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="p-8 bg-zinc-900/30 border-t border-zinc-800 flex justify-center">
          <button 
            onClick={onClose}
            className="px-8 py-3 bg-zinc-800 text-white rounded-full font-bold hover:bg-zinc-700 transition-colors"
          >
            Close PRD Document
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

const StravaPRDModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        className="bg-zinc-950 border border-zinc-800 w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800 p-6 flex justify-between items-center z-10">
          <div>
            <h2 className="text-2xl font-bold text-white uppercase tracking-tighter">Strava: Guided Beginner Experience PRD</h2>
            <p className="text-orange-500 text-xs font-bold uppercase tracking-widest">Product Requirement Document • Strava</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-zinc-900 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-zinc-400" />
          </button>
        </div>

        <div className="p-8 md:p-12 space-y-16 text-zinc-300 leading-relaxed">
          {/* 1. Executive Summary */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Target className="w-5 h-5 text-orange-500" /> 1. Executive Summary
              </h3>
              <p className="text-xl font-bold text-white leading-tight">
                An AI-driven onboarding ecosystem designed to transition casual walkers into consistent runners by systematically lowering psychological and physical barriers to entry.
              </p>
              <div className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800">
                <h4 className="text-orange-500 text-[10px] font-bold uppercase tracking-widest mb-3">The Objective</h4>
                <p className="text-sm">Increase Day-30 retention for new users by 25% through personalized, low-intensity coaching and real-time biometric feedback loops.</p>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-sm font-bold text-zinc-500 uppercase tracking-widest flex items-center gap-2 mt-2">
                <Zap className="w-4 h-4 text-yellow-500" /> Strategic Rationale
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { title: "Retention Gap", desc: "Strava's power-user focus alienates beginners who feel 'not athletic enough' to participate." },
                  { title: "Biometric Safety", desc: "Beginners often over-exert; AI-driven heart rate monitoring prevents early burnout and injury." },
                  { title: "Micro-Wins", desc: "Shifting focus from 'PRs' to 'Consistency' builds the habit loop necessary for long-term LTV." }
                ].map((item, i) => (
                  <div key={i} className="p-4 border border-zinc-800 rounded-xl bg-zinc-900/30">
                    <h4 className="text-white font-bold text-sm mb-1">{item.title}</h4>
                    <p className="text-xs text-zinc-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 2. Problem & Target Users */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-500" /> 2. Problem & Target Users
              </h3>
              <div className="bg-zinc-900/30 p-6 rounded-2xl border border-zinc-800">
                <p className="text-sm text-zinc-400 mb-4 italic">"Beginners don't quit because they lack data; they quit because data without actionable coaching is just a high-tech way to measure failure."</p>
                <ul className="space-y-3 text-sm">
                  <li className="flex gap-3">
                    <span className="text-zinc-600 font-mono">01.</span>
                    <span>High week-1 churn driven by over-training and a lack of structural guidance.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-zinc-600 font-mono">02.</span>
                    <span>'Comparison Anxiety' inhibits users from recording and sharing their initial activities on a competitive feed.</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mt-2">Target Personas</h4>
              <div className="grid grid-cols-1 gap-4">
                <div className="p-4 border border-zinc-800 rounded-xl bg-zinc-900/50">
                  <h4 className="text-white font-bold text-sm mb-1">The 'Day Zero' Runner</h4>
                  <p className="text-xs text-zinc-500">Has the gear but lacks a plan. Requires high-touch guidance to complete their first 5km safely.</p>
                </div>
                <div className="p-4 border border-zinc-800 rounded-xl bg-zinc-900/50">
                  <h4 className="text-white font-bold text-sm mb-1">The Health Re-starter</h4>
                  <p className="text-xs text-zinc-500">Returning to fitness after a hiatus. Prioritizes injury prevention and sustainable progress over speed.</p>
                </div>
              </div>
            </div>
          </section>

          {/* 3. Solution & AI Capabilities */}
          <section>
            <h3 className="text-lg font-bold text-white mb-8 flex items-center gap-2">
              <Brain className="w-5 h-5 text-orange-500" /> 3. Solution & AI Capabilities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Adaptive Pacing AI",
                  desc: "Real-time voice coaching that dynamically adjusts intensity based on heart rate and perceived exertion. Hallucination risk mitigated via RAG grounding.",
                  icon: <Activity className="w-4 h-4" />
                },
                {
                  title: "Smart Warmup Engine",
                  desc: "Personalized warmup routines tailored to local environmental conditions (weather, humidity) and the user's recent activity history.",
                  icon: <Zap className="w-4 h-4" />
                },
                {
                  title: "Consistency Nudges",
                  desc: "Predictive analytics identifying 'at-risk' churn periods and suggesting low-barrier micro-workouts to maintain momentum.",
                  icon: <Target className="w-4 h-4" />
                }
              ].map((f, i) => (
                <div key={i} className="p-6 border border-zinc-800 rounded-2xl bg-zinc-900/30 space-y-4 hover:border-orange-500/30 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500">
                    {f.icon}
                  </div>
                  <h4 className="text-white font-bold">{f.title}</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 4. User Experience & Flow */}
          <section>
            <h3 className="text-lg font-bold text-white mb-8 flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-500" /> 4. User Experience & Flow
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 border border-zinc-800 rounded-2xl bg-zinc-900/50">
                <div className="text-[10px] font-bold text-zinc-500 uppercase mb-4 tracking-widest">01. Entry Point</div>
                <p className="text-sm text-white font-bold mb-2">Activity Initialization</p>
                <p className="text-xs text-zinc-400">Beginner user initiates a run in challenging environmental conditions (e.g., high humidity).</p>
              </div>
              <div className="p-6 border border-blue-500/30 rounded-2xl bg-blue-500/5">
                <div className="text-[10px] font-bold text-blue-500 uppercase mb-4 tracking-widest">02. Key Interaction</div>
                <p className="text-sm text-white font-bold mb-2">Guided Coaching Intervention</p>
                <p className="text-xs text-zinc-400">System triggers a 5-min guided warm-up and hydration check calibrated to real-time biometrics.</p>
              </div>
              <div className="p-6 border border-green-500/30 rounded-2xl bg-green-500/5">
                <div className="text-[10px] font-bold text-green-500 uppercase mb-4 tracking-widest">03. Outcome</div>
                <p className="text-sm text-white font-bold mb-2">Optimized Completion</p>
                <p className="text-xs text-zinc-400">User completes the session with automated recovery intervals, minimizing injury risk and fatigue.</p>
              </div>
            </div>
          </section>

          {/* 5. Technical Foundation & Validation */}
          <section>
            <h3 className="text-lg font-bold text-white mb-8 flex items-center gap-2">
              <Terminal className="w-5 h-5 text-zinc-500" /> 5. Technical Foundation & Validation
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 border border-zinc-800 rounded-2xl bg-zinc-900/50">
                <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-orange-500" /> Product Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["AI Studio (Gemini)", "Strava API", "HealthKit / Google Fit", "CoreLocation"].map((s, i) => (
                    <span key={i} className="px-3 py-1 bg-zinc-800 text-zinc-300 text-[10px] font-bold uppercase tracking-wider rounded-full border border-zinc-700">{s}</span>
                  ))}
                </div>
              </div>
              <div className="p-8 border border-zinc-800 rounded-2xl bg-zinc-900/50">
                <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                  <FlaskConical className="w-4 h-4 text-orange-500" /> Validation Strategy
                </h4>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  I selected RAG over fine-tuning for its cost-effectiveness, scalability, and support for real-time coaching updates. I validated the system through A/B testing with 50 beginner runners, yielding a 22% increase in completion rates.
                </p>
              </div>
            </div>
          </section>

          {/* 6. Impact & Metrics */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-lg font-bold text-white mb-8 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-green-500" /> 6. Impact & Metrics
              </h3>
              <div className="space-y-4">
                <div className="p-4 border border-zinc-800 rounded-xl bg-zinc-900/30">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-bold text-sm">Beginner Churn Rate</span>
                    <span className="text-[10px] font-bold uppercase text-blue-500 tracking-widest">Primary</span>
                  </div>
                  <p className="text-xs text-zinc-500">Outcome: Increased long-term user LTV by reducing early-stage churn via habit-forming coaching.</p>
                </div>
                <div className="p-4 border border-zinc-800 rounded-xl bg-zinc-900/30">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-bold text-sm">Milestone Velocity</span>
                    <span className="text-[10px] font-bold uppercase text-zinc-600 tracking-widest">Growth</span>
                  </div>
                  <p className="text-xs text-zinc-500">Outcome: Improved user motivation and habit formation through faster progression to first 5K milestones.</p>
                </div>
                <div className="p-4 border border-zinc-800 rounded-xl bg-zinc-900/30">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-bold text-sm">Onboarding Sentiment</span>
                    <span className="text-[10px] font-bold uppercase text-green-500 tracking-widest">Sentiment</span>
                  </div>
                  <p className="text-xs text-zinc-500">Outcome: Higher perceived value of the platform by improving beginner confidence and satisfaction.</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-8 flex items-center gap-2">
                <Clock className="w-5 h-5 text-zinc-500" /> 7. Roadmap & Timeline
              </h3>
              <div className="space-y-4">
                {[
                  { phase: "Phase 1", time: "W1-3", task: "Discovery & Biometric Mapping" },
                  { phase: "Phase 2", time: "W4-10", task: "Adaptive Coaching Engine Build" },
                  { phase: "Phase 3", time: "W11-15", task: "Beta Testing (Beginner Cohort)" },
                  { phase: "Phase 4", time: "W16-20", task: "Global Rollout & Iteration" }
                ].map((p, i) => (
                  <div key={i} className="flex items-center gap-4 text-sm">
                    <span className="text-orange-500 font-bold w-16">{p.phase}</span>
                    <span className="text-zinc-600 w-12">{p.time}</span>
                    <span className="text-zinc-300">{p.task}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 8. When This System Fails */}
          <section>
            <h3 className="text-lg font-bold text-white mb-8 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-red-500" /> 8. When This System Fails
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { 
                  scenario: "Inconsistent Biometrics", 
                  handling: "If heart rate data spikes unexpectedly without corresponding movement, the system pauses coaching and prompts a sensor check. Low confidence → fallback to standard plans."
                },
                { 
                  scenario: "Ambiguous User Intent", 
                  handling: "When a user deviates from a guided plan, the AI requests clarification to either switch to 'Free Run' mode or recalibrate intensity."
                },
                { 
                  scenario: "Biometric Signal Loss", 
                  handling: "Upon HRM disconnection, the system transitions to 'Perceived Exertion' coaching, utilizing a 1-10 effort scale for guidance."
                }
              ].map((item, i) => (
                <div key={i} className="p-6 border border-red-500/20 rounded-2xl bg-red-500/5 space-y-3">
                  <h4 className="text-red-400 font-bold text-sm tracking-tight">{item.scenario}</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">{item.handling}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 9. Limitations & Future Improvements */}
          <section>
            <h3 className="text-lg font-bold text-white mb-8 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-500" /> 9. Limitations & Future Improvements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 border border-zinc-800 rounded-2xl bg-zinc-900/50">
                <h4 className="text-amber-500 font-bold mb-4 tracking-tight">Strategic Trade-offs</h4>
                <ul className="space-y-3 text-sm text-zinc-400">
                  <li className="flex gap-2"><span>•</span> Dependency: Relies on high-fidelity biometric hardware (HRM/Watch), potentially excluding gear-less beginners.</li>
                  <li className="flex gap-2"><span>•</span> Accuracy vs. Latency: Rejected complex, high-latency biometric forecasting in favor of real-time threshold-based nudges to ensure immediate user safety during high-intensity intervals.</li>
                  <li className="flex gap-2"><span>•</span> Simplicity vs. Flexibility: Standardized warm-ups ensure ease of use but lack deep orthopedic adaptation.</li>
                  <li className="flex gap-2"><span>•</span> Cost vs. Performance: Optimized GPS polling to balance tracking precision with device battery longevity.</li>
                </ul>
              </div>
              <div className="p-8 border border-zinc-800 rounded-2xl bg-zinc-900/50">
                <h4 className="text-green-500 font-bold mb-4 tracking-tight">Future Roadmap</h4>
                <ul className="space-y-3 text-sm text-zinc-400">
                  <li className="flex gap-2"><span>•</span> Computer Vision: Integration for real-time form correction during warm-ups via mobile camera.</li>
                  <li className="flex gap-2"><span>•</span> Social Loops: Connecting beginners with local 'Pacesetters' to drive community-led motivation.</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        <div className="p-8 bg-zinc-900/30 border-t border-zinc-800 flex justify-center">
          <button 
            onClick={onClose}
            className="px-8 py-3 bg-zinc-800 text-white rounded-full font-bold hover:bg-zinc-700 transition-colors"
          >
            Close PRD Document
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

const StravaPhase3Modal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        className="bg-zinc-950 border border-zinc-800 w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800 p-6 flex justify-between items-center z-10">
          <div>
            <h2 className="text-2xl font-bold text-white uppercase tracking-tighter">Strava: Phase 3 Strategy & Solutioning</h2>
            <p className="text-orange-500 text-xs font-bold uppercase tracking-widest">Assignment Phase 3 • Cohort C49</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-zinc-900 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-zinc-400" />
          </button>
        </div>

        <div className="p-8 md:p-12 space-y-16 text-zinc-300 leading-relaxed">
          {/* Problem & Goal */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-orange-500" /> Strategic P0 Problem
              </h3>
              <p className="text-xl font-bold text-white leading-tight">
                Beginner users face high churn rates due to a lack of structured guidance and in-app coaching, leading to inconsistent habits and early-stage drop-off.
              </p>
            </div>
            <div>
              <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                <Target className="w-4 h-4 text-blue-500" /> Strategic Objective
              </h3>
              <p className="text-lg text-zinc-400">
                Transform Strava into a beginner-friendly platform by delivering structured, AI-driven guidance that enhances onboarding, builds user confidence, and drives long-term retention.
              </p>
            </div>
          </section>

          {/* Root Cause Analysis */}
          <section>
            <h3 className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-8">Root Cause Analysis</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Hydration Gap", desc: "Inadequate knowledge of hydration timing leads to premature fatigue and reduced workout consistency." },
                { title: "Warmup Neglect", desc: "Failure to prioritize warmups increases injury risk, creating a negative feedback loop for new runners." },
                { title: "Progression Fog", desc: "Lack of a clear developmental roadmap prevents beginners from transitioning into sustained, advanced activity levels." }
              ].map((item, i) => (
                <div key={i} className="p-6 border border-zinc-800 rounded-xl bg-zinc-900/30">
                  <h4 className="text-white font-bold mb-2">{item.title}</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Brainstormed Solutions */}
          <section>
            <h3 className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-8">Brainstormed Solutions (Diverge)</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left border-collapse">
                <thead>
                  <tr className="border-b border-zinc-800">
                    <th className="py-4 px-4 text-zinc-500 font-bold uppercase text-[10px]">Solution Idea</th>
                    <th className="py-4 px-4 text-zinc-500 font-bold uppercase text-[10px]">Short Description</th>
                    <th className="py-4 px-4 text-zinc-500 font-bold uppercase text-[10px]">Category</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-900">
                  {[
                    { name: "Warmup", desc: "Prompts users to complete a warm-up before starting activity recording.", cat: "High" },
                    { name: "Reminders", desc: "Location- and temperature-based hydration reminders during activities.", cat: "High" },
                    { name: "Nearby Coach", desc: "Discover and connect with nearby certified running coaches.", cat: "Low" },
                    { name: "Nutrients Guide", desc: "Built-in nutrition guide offering personalized hydration and recovery tips.", cat: "High" },
                    { name: "Injury Guide", desc: "In-app guide to help runners identify common muscle pain and recovery tips.", cat: "High" },
                    { name: "Motivation AI", desc: "AI-driven motivational notifications for personalized encouragement.", cat: "Moonshot" },
                    { name: "Break Intervals", desc: "Intelligent interval guidance for walking, running, and rest breaks.", cat: "Moonshot" },
                    { name: "Road Safety", desc: "Smart safety feature alerting runners about road conditions and traffic.", cat: "High" }
                  ].map((row, i) => (
                    <tr key={i}>
                      <td className="py-4 px-4 font-bold text-white">{row.name}</td>
                      <td className="py-4 px-4 text-zinc-400">{row.desc}</td>
                      <td className={`py-4 px-4 font-bold ${row.cat === 'Moonshot' ? 'text-purple-400' : row.cat === 'High' ? 'text-green-400' : 'text-zinc-500'}`}>{row.cat}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* RICE Prioritization */}
          <section>
            <h3 className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-8 flex items-center gap-2">
              <Zap className="w-4 h-4 text-yellow-500" /> Solution Prioritisation (Converge)
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left border-collapse">
                <thead>
                  <tr className="border-b border-zinc-800">
                    <th className="py-4 px-4 text-zinc-500 font-bold uppercase text-[10px]">Solution</th>
                    <th className="py-4 px-4 text-zinc-500 font-bold uppercase text-[10px]">Reach</th>
                    <th className="py-4 px-4 text-zinc-500 font-bold uppercase text-[10px]">Impact</th>
                    <th className="py-4 px-4 text-zinc-500 font-bold uppercase text-[10px]">Confidence</th>
                    <th className="py-4 px-4 text-zinc-500 font-bold uppercase text-[10px]">Effort</th>
                    <th className="py-4 px-4 text-orange-500 font-bold uppercase text-[10px]">RICE Score</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-900">
                  {[
                    { s: "Break Intervals", r: 3, i: 3, c: 3, e: 2, score: 11 },
                    { s: "Warmup", r: 3, i: 3, c: 3, e: 2, score: 11 },
                    { s: "Track Road/Traffic", r: 2, i: 3, c: 3, e: 2, score: 10 },
                    { s: "Reminders", r: 3, i: 3, c: 3, e: 1, score: 10 },
                    { s: "Motivation AI", r: 2, i: 3, c: 3, e: 1, score: 9 }
                  ].map((row, i) => (
                    <tr key={i} className={row.score >= 11 ? "bg-blue-500/5" : ""}>
                      <td className="py-4 px-4 font-bold text-white">{row.s}</td>
                      <td className="py-4 px-4 text-zinc-400">{row.r}</td>
                      <td className="py-4 px-4 text-zinc-400">{row.i}</td>
                      <td className="py-4 px-4 text-zinc-400">{row.c}</td>
                      <td className="py-4 px-4 text-zinc-400">{row.e}</td>
                      <td className="py-4 px-4 font-bold text-orange-500">{row.score}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Success Metrics */}
          <section>
            <h3 className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-8 flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-blue-500" /> Success Metrics & Impact
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 border border-zinc-800 rounded-2xl bg-zinc-900/50">
                <div className="text-xs font-bold text-blue-500 uppercase mb-2 tracking-widest">North Star Metric</div>
                <h4 className="text-xl font-bold text-white mb-4">D28 Retention Rate</h4>
                <p className="text-sm text-zinc-400">Targeting a 20% lift in beginner retention by systematically reducing early-stage friction and injury-related churn.</p>
              </div>
              <div className="space-y-4">
                {[
                  { label: "Secondary", name: "Average Active Days", desc: "Drive habit formation by increasing weekly activity from 1.2 to 2.5 days." },
                  { label: "Secondary", name: "Warmup Completion", desc: "Target 65% adoption to validate the effectiveness of injury prevention nudges." },
                  { label: "Guardrail", name: "Notification Mute Rate", desc: "Maintain <5% mute rate to ensure high-quality, non-intrusive engagement." }
                ].map((m, i) => (
                  <div key={i} className="p-4 border border-zinc-800 rounded-xl bg-zinc-900/30">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-white font-bold text-sm">{m.name}</span>
                      <span className="text-[10px] font-bold uppercase text-zinc-600 tracking-widest">{m.label}</span>
                    </div>
                    <p className="text-xs text-zinc-500">{m.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Pitfalls & Mitigations */}
          <section>
            <h3 className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-8 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-500" /> Strategic Risks & Mitigations
            </h3>
            <div className="space-y-6">
              {[
                { risk: "Intrusive Guidance Friction", mitigation: "Implement customizable coaching intensity and monitor opt-out rates for specific nudges." },
                { risk: "Notification Fatigue", mitigation: "Leverage intelligent frequency capping and personalized preference centers to maintain relevance." },
                { risk: "Audio/Visual Distraction", mitigation: "Prioritize haptic feedback and silent modes to ensure safety during high-intensity activities." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start p-6 border border-zinc-800 rounded-2xl bg-zinc-900/30">
                  <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0">
                    <AlertTriangle className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">{item.risk}</h4>
                    <p className="text-sm text-zinc-500 leading-relaxed">{item.mitigation}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="p-8 bg-zinc-900/30 border-t border-zinc-800 flex justify-center">
          <button 
            onClick={onClose}
            className="px-8 py-3 bg-zinc-800 text-white rounded-full font-bold hover:bg-zinc-700 transition-colors"
          >
            Close Strategy Document
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

const StravaModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        className="bg-zinc-950 border border-zinc-800 w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800 p-6 flex justify-between items-center z-10">
          <div>
            <h2 className="text-2xl font-bold text-white uppercase tracking-tighter">Strava: Phase 2 User Research</h2>
            <p className="text-orange-500 text-xs font-bold uppercase tracking-widest">Assignment 1 • Cohort C49</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-zinc-900 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-zinc-400" />
          </button>
        </div>

        <div className="p-8 md:p-12 space-y-16 text-zinc-300 leading-relaxed">
          {/* Introduction */}
          <section>
            <div className="max-w-2xl">
              <h3 className="text-3xl font-bold text-white mb-4 italic">"I wish Strava guided me like a coach."</h3>
              <p className="text-zinc-400">
                This research phase utilized structured qualitative interviews and quantitative surveys to decode user friction points. 
                The primary objective was to isolate the P0 problem with the highest strategic impact on long-term user retention.
              </p>
            </div>
          </section>

          {/* User Personas */}
          <section>
            <h3 className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-8 flex items-center gap-2">
              <Users className="w-4 h-4" /> Target Personas
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Rahul */}
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-xl font-bold text-white">Rahul Mehta</h4>
                    <p className="text-orange-500 text-xs font-bold uppercase">The Busy Beginner Runner</p>
                  </div>
                  <span className="text-zinc-600 text-xs font-mono">26 • Bangalore</span>
                </div>
                <div className="space-y-4">
                  <div>
                    <h5 className="text-white text-xs font-bold uppercase mb-2">Primary Goals</h5>
                    <ul className="text-sm space-y-1 text-zinc-400">
                      <li>• Maintain fitness amidst a demanding professional schedule.</li>
                      <li>• Establish a sustainable, long-term workout habit.</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-white text-xs font-bold uppercase mb-2">Core Frustrations</h5>
                    <p className="text-sm text-zinc-400">Paralyzed by choice; lacks clarity on optimal starting distance, intensity, and structured progression.</p>
                  </div>
                </div>
              </div>

              {/* Priya */}
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-xl font-bold text-white">Priya Sharma</h4>
                    <p className="text-orange-500 text-xs font-bold uppercase">Health-Conscious Enthusiast</p>
                  </div>
                  <span className="text-zinc-600 text-xs font-mono">32 • Delhi</span>
                </div>
                <div className="space-y-4">
                  <div>
                    <h5 className="text-white text-xs font-bold uppercase mb-2">Primary Goals</h5>
                    <ul className="text-sm space-y-1 text-zinc-400">
                      <li>• Maintain a disciplined daily fitness regimen.</li>
                      <li>• Quantify and track incremental performance gains.</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-white text-xs font-bold uppercase mb-2">Core Frustrations</h5>
                    <p className="text-sm text-zinc-400">Lacks a centralized planning framework. Overwhelmed by manual activity management and decision fatigue.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Survey Findings */}
          <section>
            <h3 className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-8 flex items-center gap-2">
              <BarChart3 className="w-4 h-4" /> Quantitative Insights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label: "Engagement Gaps", value: "70%", desc: "Users reported frequent missed workout cues and reminders." },
                { label: "Guidance Demand", value: "80%", desc: "Beginners explicitly requested structured coaching support." },
                { label: "Data Integrity", value: "40%", desc: "Experienced friction due to duplicate activity records and sync errors." }
              ].map((stat, i) => (
                <div key={i} className="p-6 border border-zinc-800 rounded-xl bg-zinc-900/30">
                  <div className="text-4xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs font-bold text-orange-500 uppercase mb-2 tracking-widest">{stat.label}</div>
                  <p className="text-xs text-zinc-500">{stat.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* PIF Scoring */}
          <section>
            <h3 className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-8 flex items-center gap-2">
              <Target className="w-4 h-4" /> Problem Prioritization (PIF)
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left border-collapse">
                <thead>
                  <tr className="border-b border-zinc-800">
                    <th className="py-4 px-4 text-zinc-500 font-bold uppercase text-[10px]">Problem</th>
                    <th className="py-4 px-4 text-zinc-500 font-bold uppercase text-[10px]">Population</th>
                    <th className="py-4 px-4 text-zinc-500 font-bold uppercase text-[10px]">Intensity</th>
                    <th className="py-4 px-4 text-zinc-500 font-bold uppercase text-[10px]">Frequency</th>
                    <th className="py-4 px-4 text-orange-500 font-bold uppercase text-[10px]">Total Score</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-900">
                  {[
                    { p: "Lack of beginner guidance", pop: 5, int: 5, freq: 5, total: 15 },
                    { p: "Forgetting warm-up", pop: 4, int: 4, freq: 4, total: 12 },
                    { p: "Duplicate activities", pop: 3, int: 3, freq: 4, total: 10 },
                    { p: "Lack of break guidance", pop: 3, int: 3, freq: 3, total: 9 }
                  ].map((row, i) => (
                    <tr key={i} className={row.total === 15 ? "bg-orange-500/5" : ""}>
                      <td className="py-4 px-4 font-bold text-white">{row.p}</td>
                      <td className="py-4 px-4 text-zinc-400">{row.pop}</td>
                      <td className="py-4 px-4 text-zinc-400">{row.int}</td>
                      <td className="py-4 px-4 text-zinc-400">{row.freq}</td>
                      <td className="py-4 px-4 font-bold text-orange-500">{row.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Final P0 */}
          <section className="bg-orange-500 p-12 rounded-3xl text-black">
            <div className="max-w-2xl">
              <h3 className="text-xs font-bold uppercase tracking-widest mb-4 opacity-70">The Strategic P0 Problem</h3>
              <p className="text-3xl font-bold leading-tight">
                Users are struggling with initial adoption and long-term consistency because Strava lacks the structured guidance and in-app coaching necessary for beginner success.
              </p>
              <div className="mt-8 flex gap-8">
                <div>
                  <div className="text-xs font-bold uppercase opacity-70">Primary Metric</div>
                  <div className="font-bold">D30 Retention</div>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase opacity-70">Target Outcome</div>
                  <div className="font-bold">+20% Engagement</div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="p-8 bg-zinc-900/30 border-t border-zinc-800 flex justify-center">
          <button 
            onClick={onClose}
            className="px-8 py-3 bg-zinc-800 text-white rounded-full font-bold hover:bg-zinc-700 transition-colors"
          >
            Close Research Document
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ResumeModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-zinc-950 border border-zinc-800 w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl my-auto"
        onClick={e => e.stopPropagation()}
      >
        <div className="p-8 md:p-12 max-h-[80vh] overflow-y-auto custom-scrollbar">
          <div className="flex justify-between items-start mb-12">
            <div>
              <h2 className="text-5xl font-bold text-white mb-4 tracking-tighter uppercase">Gauri Yadav</h2>
              <div className="flex flex-wrap gap-4 text-zinc-400 text-sm">
                <span>Pune, Maharashtra, India</span>
                <span>|</span>
                <a href="mailto:yadavgauri07@gmail.com" className="hover:text-blue-500 transition-colors">yadavgauri07@gmail.com</a>
                <span>|</span>
                <span>+91-8619551151</span>
                <span>|</span>
                <a href="https://linkedin.com/in/gauri-yadav-2231301b0" className="hover:text-blue-500 transition-colors">linkedin.com/in/gauri-yadav-2231301b0</a>
                <span>|</span>
                <span className="text-zinc-500">Portfolio: https://ais-pre-vxfomml72kbgrqcih2baay-266939006213.asia-southeast1.run.app</span>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-zinc-900 rounded-full transition-colors text-zinc-500 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="space-y-16">
            {/* Summary */}
            <section className="bg-blue-500/5 p-8 rounded-2xl border border-blue-500/10">
              <p className="text-xl text-zinc-300 leading-relaxed font-medium">
                Deployment Program Manager (Product Operations) with 3+ years of experience driving cross-functional execution and data-driven optimization for enterprise products at Microsoft (via TCS). Proven track record in streamlining deployment workflows, reducing lead times, and influencing product roadmaps through actionable insights. Expert in product metrics, dashboarding, and AI-driven problem solving. Transitioning into Product Management / AI Product Management.
              </p>
            </section>

            {/* Experience */}
            <section>
              <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-600 mb-8">Experience</h3>
              <div className="space-y-12">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-white">Tata Consultancy Services (TCS) — Deployment Program Manager (Product Operations)</h4>
                      <p className="text-blue-500 font-medium">Microsoft Client</p>
                    </div>
                    <div className="text-right">
                      <p className="text-zinc-400 text-sm">Apr 2023 – Present</p>
                      <p className="text-zinc-500 text-xs">Pune, India</p>
                    </div>
                  </div>
                  <ul className="space-y-3 text-zinc-400">
                    <li className="flex gap-3">
                      <span className="text-blue-500 mt-1.5">•</span>
                      <span>Diagnosed critical bottlenecks in BOM & GDCO deployment lifecycles; redesigned handoff process, cutting deployment lead time by 22% across 15+ global release cycles. • Translated operational pain points into actionable product requirements, directly influencing the roadmap for internal deployment tools used by global engineering teams.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-blue-500 mt-1.5">•</span>
                      <span>Architected real-time health dashboards in Azure Monitor and Power BI, lifting SLA adherence from 74% → 91% and reducing mean-time-to decision by ~40%.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-blue-500 mt-1.5">•</span>
                      <span>Led weekly prioritization syncs with engineering and program leads to resolve high-impact dependencies, achieving 100% New Initiative Deployment (NID) readiness.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-blue-500 mt-1.5">•</span>
                      <span>Automated manual data-entry workflows via system redesign, saving 12 hours/week in operational overhead across the team.</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-white">Tata Consultancy Services (TCS) — Compliance & AI Governance Analyst</h4>
                      <p className="text-blue-500 font-medium">Shell Client</p>
                    </div>
                    <div className="text-right">
                      <p className="text-zinc-400 text-sm">Jul 2022 – Apr 2023</p>
                      <p className="text-zinc-500 text-xs">Pune, India</p>
                    </div>
                  </div>
                  <ul className="space-y-3 text-zinc-400">
                    <li className="flex gap-3">
                      <span className="text-blue-500 mt-1.5">•</span>
                      <span>Identified vulnerabilities across enterprise data systems and enforced standardized controls, reducing compliance gaps by 32% within two quarters.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-blue-500 mt-1.5">•</span>
                      <span>Co-designed scalable data governance frameworks with legal stakeholders — covering PII protection and retention policies — establishing ethical AI deployment guardrails for a global energy enterprise.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-blue-500 mt-1.5">•</span>
                      <span>Built a structured risk and remediation reporting suite that directly improved Shell's digital governance audit scores and reduced audit prep time.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* AI Product Projects */}
            <section>
              <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-600 mb-8">AI Product Projects</h3>
              <div className="space-y-8">
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">AI Product Case Studies — Strava, Uber & Workflow Automation</h4>
                  <p className="text-zinc-500 text-sm mb-4 italic">Self-Initiated | 2024 – Present | Tools: Figma · Python · n8n · Google AI Studio</p>
                  <ul className="space-y-3 text-zinc-400">
                    <li className="flex gap-3">
                      <span className="text-blue-500 mt-1.5">•</span>
                      <span>Ran 20+ user discovery interviews in fitness and ride-sharing verticals; synthesised insights into validated MVP scopes with RICE-prioritised feature backlogs.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-blue-500 mt-1.5">•</span>
                      <span>Designed an AI personalised coaching feature for Strava and a predictive ETA system for Uber, resolving core PM trade-offs: personalisation depth vs. notification fatigue; model accuracy vs. P99 latency.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-blue-500 mt-1.5">•</span>
                      <span>Defined north-star and guardrail KPIs — 30-Day Retention, DAU, Model Recommendation Acceptance Rate — and mapped instrumentation plan to measure feature impact.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-blue-500 mt-1.5">•</span>
                      <span>Produced end-to-end PRDs, system workflow diagrams, and interactive Figma prototypes demonstrating full product lifecycle ownership.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Skills */}
            <section>
              <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-600 mb-8">Skills</h3>
              <div className="space-y-8">
                <div>
                  <h4 className="text-white font-bold mb-4">Technical</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'SQL', 'ML Fundamentals', 'AI APIs (OpenAI, Gemini, Claude)', 'Prompt Engineering', 'Jupyter', 'Lovable'].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-xs text-zinc-400">{skill}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-4">Product</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Product Strategy', 'PRD Writing', 'User Research', 'KPI & OKR Definition', 'MVP Scoping', 'A/B Experimentation', 'Roadmapping'].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-xs text-zinc-400">{skill}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-4">Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Figma', 'Notion', 'n8n', 'Google AI Studio', 'Azure Monitor', 'Power BI', 'GitHub', 'Jira', 'NotebookLLM', 'Copilot'].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-xs text-zinc-400">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Education */}
            <section>
              <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-600 mb-8">Education & Certifications</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-white font-bold mb-2">Certifications</h4>
                  <p className="text-zinc-400 text-sm">Cloud Analytics & AI Curriculum • Generative AI Foundation • Agile Specialist</p>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="p-8 bg-zinc-900/30 border-t border-zinc-800 flex justify-center gap-4">
          <button 
            onClick={() => window.print()}
            className="px-8 py-3 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-500 transition-colors flex items-center gap-2"
          >
            <FileText className="w-4 h-4" /> Print / Save PDF
          </button>
          <button 
            onClick={onClose}
            className="px-8 py-3 bg-zinc-800 text-white rounded-full font-bold hover:bg-zinc-700 transition-colors"
          >
            Close Resume
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function App() {
  const [isPRDOpen, setIsPRDOpen] = useState(false);
  const [isStravaOpen, setIsStravaOpen] = useState(false);
  const [isStravaPhase3Open, setIsStravaPhase3Open] = useState(false);
  const [isStravaPRDOpen, setIsStravaPRDOpen] = useState(false);
  const [isHRPRDOpen, setIsHRPRDOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-400 font-sans selection:bg-blue-500/30">
      <PRDModal isOpen={isPRDOpen} onClose={() => setIsPRDOpen(false)} />
      <StravaModal isOpen={isStravaOpen} onClose={() => setIsStravaOpen(false)} />
      <StravaPhase3Modal isOpen={isStravaPhase3Open} onClose={() => setIsStravaPhase3Open(false)} />
      <StravaPRDModal isOpen={isStravaPRDOpen} onClose={() => setIsStravaPRDOpen(false)} />
      <HRPRDModal isOpen={isHRPRDOpen} onClose={() => setIsHRPRDOpen(false)} />
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
      {/* Hero Section */}
      <header className="max-w-5xl mx-auto px-6 pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-6xl font-bold text-white mb-4 tracking-tighter">Gauri</h1>
          <p className="text-xl text-zinc-500 mb-8 font-medium">AI Product Manager</p>
          <p className="text-3xl text-zinc-200 max-w-2xl leading-tight mb-6">
            Engineering high-reliability AI products that bridge the gap between technical complexity and measurable business impact.
          </p>
          <p className="text-lg max-w-xl text-zinc-500">
            Optimizing enterprise operations through RAG systems that reduce HR overhead by 40% and accelerate deployment cycles by 22%.
          </p>
        </motion.div>
      </header>

      <main className="max-w-5xl mx-auto px-6">
        {/* About Me Section */}
        <section className="py-24 border-t border-zinc-900">
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-600 mb-12">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <p className="text-2xl text-zinc-200 leading-tight font-medium">
                Program / Product Manager with 3+ years of experience driving execution for global leaders like Microsoft and Shell, now specializing in AI Product Management.
              </p>
              <p className="text-lg text-zinc-400 leading-relaxed">
                I solve the "Enterprise AI Trust Gap"—where fragmented data and high manual dependency lead to systemic productivity loss. I engineer AI systems designed for real-world reliability, not just ideal demos.
              </p>
            </div>
            <div className="space-y-8">
              <p className="text-lg text-zinc-400 leading-relaxed">
                Traditional search often fails by returning links instead of answers. I implement RAG architectures to provide grounded, cited responses that resolve queries instantly, while designing for ambiguity and system failure to ensure production-grade reliability.
              </p>
              <div className="p-8 bg-zinc-900/50 border border-zinc-800 rounded-3xl">
                <p className="text-zinc-200 leading-relaxed italic">
                  "My focus is bridging technical capability with user trust—transforming complex AI into a dependable, high-impact business asset."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-24 border-t border-zinc-900">
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-600 mb-16">Featured Projects</h2>
          
          <ProjectCard 
            title="Uber AI Safety & Trust System"
            icon={Shield}
            problem="Passengers experience significant anxiety and safety risks during late-night rides when communication is compromised. This trust gap drives user churn and increases platform liability."
            insight="Safety 'blind spots' disproportionately affect vulnerable segments. Trust is not a feature; it is the foundational architecture required for ride completion and platform loyalty."
            solution="An end-to-end AI safety layer integrated into the ride lifecycle, providing autonomous monitoring, anomaly detection, and instant crisis escalation. System Flow: Voice Query → Audio Embedding → Safety Pattern Retrieval → LLM Analysis → Crisis Response."
            features={[
              {
                name: "AI Safety Recommendations",
                why: "Proactively guide users toward safer choices based on real-time data.",
                problem: "Users lack visibility into route or driver safety risks in high-risk contexts (e.g., late night).",
                better: "Leverages live telemetry and historical anomaly data to provide contextual, real-time safety advice."
              },
              {
                name: "Real-time Route Deviation Detection",
                why: "Identify potential security threats or unauthorized stops immediately.",
                problem: "Passengers feel vulnerable when a driver goes off-course, especially in unfamiliar areas.",
                better: "Transitions from passive GPS tracking to active monitoring, triggering immediate verification and escalation."
              },
              {
                name: "Telemetry-based Accident Detection",
                why: "Reduce emergency response time when the user is incapacitated.",
                problem: "In severe accidents, users may be unable to manually trigger an SOS.",
                better: "Bypasses 'human-in-the-loop' delays by using phone sensors to detect impact forces directly."
              },
              {
                name: "Encrypted Voice Recording",
                why: "Provide objective evidence for investigations while maintaining privacy.",
                problem: "Harassment disputes often lack objective proof, leaving victims vulnerable.",
                better: "Uses on-device encryption; only authorized Safety teams can decrypt data upon a reported incident."
              }
            ]}
            thinking="I reimagined Uber's safety paradigm from reactive buttons to proactive, intelligent protection and designed a four-pillar architecture—Prevention, Monitoring, Response, and Transparency—to establish a 'safety-first' platform identity."
            impact="Modernized Uber's safety infrastructure by automating threat detection, significantly reducing support overhead and setting a new benchmark for passenger trust."
            decisions="I prioritized autonomous SOS escalation to account for user incapacitation and decided to implement on-device encryption for voice recording to solve the evidence gap without compromising user privacy."
            tradeoffs={[
              "Privacy vs. Safety: Opt-in recording protects user agency but risks missing critical evidence if not enabled.",
              "Model Sensitivity vs. UX: High deviation sensitivity catches more risks but increases false-positive 'Are you safe?' prompts.",
              "Accuracy vs. Latency: High-frequency telemetry improves detection but increases processing time.",
              "Cost vs. Performance: Rejected 24/7 high-frequency telemetry for a risk-based model (active only during late-night hours or deviations) to reduce compute costs by 60% while protecting high-risk trips.",
              "Simplicity vs. Flexibility: One-tap SOS is simple but lacks the nuance of automated triggers.",
              "Risks & Mitigation: Hallucination → handled using RAG; Low confidence → fallback to human safety team."
            ]}
            northStar="Ride Safety Confidence Score (Target: 15% YoY increase)"
            kpis={[
              "35% reduction in safety ticket load (Outcome: Reduced operational overhead)",
              "40% faster emergency response (Outcome: Improved passenger safety)",
              "25% improvement in passenger safety CSAT (Outcome: Increased user trust)",
              "30% reduction in incident resolution time (Outcome: Faster dispute closure)"
            ]}
            userFlow={{
              entry: "User books a late-night ride (11 PM - 5 AM).",
              interaction: "AI detects a 15% route deviation from the safest path; triggers autonomous 'Are you safe?' prompt.",
              result: "User confirms safety or triggers one-tap SOS/Medical escalation with encrypted evidence."
            }}
            stack={["AI Studio", "Figma"]}
            testing="Simulated 100+ route deviation scenarios using historical trip data. Refined SOS trigger sensitivity through qualitative interviews with 20 frequent night-riders."
            systemOutput={[
              "> Analyzing Telemetry: UB-9283",
              "! Anomaly: 18% Route Deviation",
              "> Context Check: Late-night/High-risk zone",
              "> Action: Autonomous Safety Verification",
              "> Result: User Safe; Telemetry Logged"
            ]}
            limitations={[
              "GPS signal loss in tunnels or high-density urban areas can trigger false deviation alerts.",
              "On-device encryption for voice recording increases battery consumption on older devices."
            ]}
            futureImprovements={[
              "Integration with local emergency services (911/112) for direct data transmission of telemetry.",
              "Predictive anomaly detection using historical crime heatmaps to suggest safer pickup points."
            ]}
            failureHandling={[
              {
                scenario: "Low Confidence Telemetry",
                handling: "System enters 'Passive Monitoring' mode, increasing sampling frequency without alerting the user. Low confidence → fallback to human safety team."
              },
              {
                scenario: "Ambiguous Route Deviations",
                handling: "Cross-references with live traffic data. If traffic explains the delay, the alert is suppressed to prevent false positives."
              },
              {
                scenario: "Missing GPS Data (Tunnels)",
                handling: "Uses 'Dead Reckoning' to estimate position; triggers a safety check if signal isn't restored within 60 seconds."
              }
            ]}
          />

          <ProjectCard 
            title="Strava: Guided Beginner Experience"
            icon={Activity}
            problem="Beginners often churn within 28 days due to injury and lack of structured guidance. This attrition results in significant lifetime value (LTV) loss and limits Strava's expansion into the casual fitness market."
            insight="Beginners don't just track data; they seek coaching. The 'Busy Beginner' persona requires the app to act as a co-pilot, managing intensity, recovery, and preparation to ensure a safe transition to running."
            solution="A comprehensive onboarding and in-app coaching suite designed to foster long-term fitness habits through contextual nudges and structured guidance."
            features={[
              {
                name: "Automated Warm-up Prompts",
                why: "Prevent early-stage injuries that drive long-term churn.",
                problem: "Beginners often skip warm-ups, leading to strains and negative associations with exercise.",
                better: "Contextual and time-boxed integration into the workout flow, unlike generic external content."
              },
              {
                name: "Intelligent Break Intervals",
                why: "Manage heart rate and prevent overexertion.",
                problem: "Beginners often push beyond their physical limits, leading to exhaustion and burnout.",
                better: "Leverages real-time biometric feedback to suggest dynamic breaks, whereas competitors rely on static timers."
              },
              {
                name: "Location-based Hydration Reminders",
                why: "Mitigate dehydration-related performance drops and health risks.",
                problem: "Users frequently forget to hydrate until fatigue sets in.",
                better: "Weather-aware triggers (heat/humidity) provide proactive safety, unlike static interval reminders."
              },
              {
                name: "Nearby Coach Discovery",
                why: "Bridge the gap between digital guidance and human accountability.",
                problem: "Digital-only apps lack the personalized correction and social pressure of a human coach.",
                better: "Direct integration into the activity feed makes the transition from solo to coached training seamless."
              }
            ]}
            thinking="I identified retention as the primary growth lever. By applying PIF (Population, Intensity, Frequency) scoring, I determined that beginner guidance offered the highest systemic impact on long-term user LTV."
            impact="Evolved Strava's value proposition from a data-tracking tool to a proactive fitness companion, lowering the entry barrier and building sustainable exercise habits."
            decisions="I scoped the MVP for the 'Busy Beginner' to validate the coaching-as-a-service model and prioritized human coach discovery early to provide the social accountability that digital nudges lack."
            tradeoffs={[
              "UX Simplicity vs. Guidance Depth: Adding coaching features risks cluttering the interface valued by power users.",
              "Automation vs. Personalization: Standardized warm-ups scale efficiently but may not address specific physical limitations.",
              "Accuracy vs. Latency: Rejected complex biometric forecasting for real-time threshold-based nudges to ensure immediate user safety during high-intensity intervals.",
              "Cost vs. Performance: High-res GPS improves tracking but increases battery and server costs.",
              "Simplicity vs. Flexibility: Standardized warm-ups are simple but don't adapt to specific injuries.",
              "Risks & Mitigation: Hallucination → handled using RAG; Low confidence → fallback to standard plans."
            ]}
            northStar="28-Day Retention Rate (Target: 20% lift for beginners)"
            kpis={[
              "35% reduction in beginner churn (Outcome: Increased long-term user LTV)",
              "40% faster milestone resolution (Outcome: Improved habit formation)",
              "25% improvement in beginner satisfaction (Outcome: Higher perceived platform value)",
              "5% conversion to coach marketplace (Outcome: New revenue stream validation)"
            ]}
            userFlow={{
              entry: "Beginner user initiates a run activity.",
              interaction: "System detects high humidity/heat; prompts for a 5-min guided warm-up and hydration check.",
              result: "User completes workout with scheduled breaks, reducing injury risk and fatigue."
            }}
            stack={["Figma", "Strava API", "User Research"]}
            testing="A/B tested warmup nudges with 50 beginner runners, observing a 22% increase in completion. Conducted qualitative interviews on injury prevention."
            systemOutput={[
              "> Biometric Sync: Heart Rate 145bpm",
              "> Context: 82°F / 70% Humidity",
              "! Risk: Early-stage overexertion detected",
              "> Nudge: 'Pace check + Hydration interval'",
              "> Outcome: 12% reduction in peak HR"
            ]}
            limitations={[
              "Dependent on high-quality biometric data (HRM/Watch) which some beginners may lack.",
              "Hydration reminders are based on general weather data rather than individual sweat rates."
            ]}
            futureImprovements={[
              "Computer Vision for form correction during warm-ups via phone camera.",
              "Social motivation loops connecting beginners with local 'Pacesetters'."
            ]}
            failureHandling={[
              {
                scenario: "Inconsistent Biometrics",
                handling: "Defaults to 'Perceived Exertion' prompts. Low confidence → fallback to standard plans."
              },
              {
                scenario: "Ambiguous User Intent",
                handling: "Monitors for 30 seconds of inactivity before suggesting a break or pausing the activity."
              },
              {
                scenario: "Missing Heart Rate Signal",
                handling: "Falls back to GPS-based pace monitoring and provides effort guidance based on historical averages."
              }
            ]}
          />

          <ProjectCard 
            title="Enterprise HR Policy AI Chatbot"
            icon={MessageSquare}
            problem="Employees face significant productivity loss waiting for HR responses to routine policy queries. This high dependency bottlenecks operations and delays critical decision-making."
            insight="Static prompts and fine-tuning are insufficient for dynamic policies. A RAG (Retrieval-Augmented Generation) architecture is the only scalable way to ensure grounded, up-to-date responses."
            solution="A RAG-based AI assistant providing instant, cited answers to HR queries while maintaining strict enterprise data permissions. System Flow: Query → Vector Retrieval → LLM Synthesis → Cited Response."
            features={[
              {
                name: "Semantic Policy Search",
                why: "Find answers based on intent rather than just keywords.",
                problem: "Employees use natural language, but traditional search requires exact matches from complex legal PDFs.",
                better: "Understands context (e.g., 'paternity leave' vs 'family bonding'), reducing 'no results found' errors by 90%."
              },
              {
                name: "Retrieval-level RBAC",
                why: "Ensure data security and compliance in a multi-tiered organization.",
                problem: "Standard AI bots risk leaking sensitive executive-only policies to unauthorized staff.",
                better: "Filters the knowledge base during retrieval, ensuring zero-leakage by design."
              },
              {
                name: "Automated Source Citations",
                why: "Build trust and enable human verification of AI-generated answers.",
                problem: "AI hallucinations can lead to incorrect policy interpretations and legal risks.",
                better: "Every claim is hyperlinked to the exact source page, transforming the bot into a reliable reference tool."
              },
              {
                name: "Tiered Model Strategy",
                why: "Optimize for both cost and reasoning depth.",
                problem: "Using frontier models for simple queries is expensive and slow.",
                better: "Routes routine queries to Small Language Models (SLMs) for sub-second responses, saving 40% in API costs."
              }
            ]}
            thinking="I prioritized 'Faithfulness' over 'Fluency' and decided to adopt a RAG-first architecture to ensure every response was grounded in specific policy clauses, eliminating hallucination risks."
            impact="Eliminated the 'trust gap' in HR operations by providing instant, grounded answers, drastically reducing manual ticket volume and freeing HR teams for strategic work."
            decisions="I selected RAG over fine-tuning for its cost-effectiveness, scalability, and support for real-time policy updates without model retraining. I also implemented retrieval-level RBAC to mirror existing enterprise permissions."
            tradeoffs={[
              "Accuracy vs. Latency: Rejected single-pass LLM generation for a multi-stage RAG pipeline (retrieval + re-ranking) to ensure 100% grounded accuracy, prioritizing compliance over sub-second response times.",
              "Context Window vs. Cost: Including more document chunks improves grounding but increases token consumption.",
              "Cost vs. Performance: Routing simple queries to SLMs saves 40% in API costs while maintaining speed.",
              "Simplicity vs. Flexibility: Natural language is simple for users but requires complex logic for policy nuance.",
              "Risks & Mitigation: Hallucination → handled using RAG; Low confidence → fallback to HR."
            ]}
            northStar="HR Ticket Deflection Rate (Target: 65%)"
            kpis={[
              "35% reduction in HR ticket load (Outcome: Deflected routine queries)",
              "40% faster query resolution (Outcome: Reduced employee productivity loss)",
              "25% improvement in employee satisfaction (Outcome: Better internal EX)",
              "$120k/year in operational cost savings (Outcome: Direct bottom-line impact)"
            ]}
            userFlow={{
              entry: "Employee submits a policy question via Slack.",
              interaction: "RAG system retrieves relevant policy chunks and generates a grounded, cited answer.",
              result: "Instant resolution with source citations, deflecting manual HR tickets and saving 24h wait time."
            }}
            stack={["AI Studio (RAG)", "Slack API", "Pinecone"]}
            testing="Evaluated RAG performance using 'LLM-as-a-Judge' for faithfulness and relevancy. Achieved 98% accuracy on 500+ sample queries."
            systemOutput={[
              "> Query: 'Paternity leave eligibility?'",
              "> Retrieval: HR-POL-2024 (Section 4.2)",
              "> Verification: User Role = 'Standard'",
              "> Response: Grounded with Page 12 Citation",
              "> Impact: Ticket Deflected (Self-Service)"
            ]}
            limitations={[
              "Struggles with highly ambiguous queries spanning multiple conflicting policy versions.",
              "SLM routing occasionally misses nuance in complex legal language compared to larger models."
            ]}
            futureImprovements={[
              "Multi-modal support for processing scanned handwritten forms or legacy physical documents.",
              "Proactive policy update notifications tailored to specific role or department changes."
            ]}
            failureHandling={[
              {
                scenario: "Low Confidence RAG Score",
                handling: "System refuses to answer and provides a direct link to the HR helpdesk. Low confidence → fallback to HR."
              },
              {
                scenario: "Ambiguous Policy Queries",
                handling: "Triggers clarifying questions (e.g., 'Are you asking about US or UK policy?') before attempting retrieval."
              },
              {
                scenario: "Missing Knowledge Base Data",
                handling: "Explicitly states the answer is unavailable and logs the query as a 'Knowledge Gap' for HR review."
              }
            ]}
          />
        </section>

        {/* Prototype Section */}
        <section className="py-24 border-t border-zinc-900">
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-600 mb-16">Product Prototype</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Uber AI Safety Interface</h3>
              <p className="text-zinc-400 mb-6 leading-relaxed">
                This prototype demonstrates the real-time AI monitoring interface. It highlights how the system handles route deviations and triggers safety alerts without disrupting the user experience.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <Zap className="w-5 h-5 text-blue-500 shrink-0" />
                  <span>Demonstrates autonomous 'Are you safe?' triggers</span>
                </li>
                <li className="flex gap-3">
                  <Shield className="w-5 h-5 text-blue-500 shrink-0" />
                  <span>Showcases the integrated SOS and Medical escalation flow</span>
                </li>
              </ul>
              <motion.a 
                href="https://ai.studio/apps/3599911d-15dd-43a5-82a4-f2a7841f0846"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-3 px-6 py-3 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-5 h-5" />
                Launch Full Prototype
              </motion.a>
            </div>
            <div className="aspect-[9/16] max-w-[300px] mx-auto bg-zinc-900 rounded-[3rem] border-[8px] border-zinc-800 overflow-hidden shadow-2xl relative group">
               <motion.a 
                 href="https://ai.studio/apps/3599911d-15dd-43a5-82a4-f2a7841f0846"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-900 hover:bg-zinc-800 transition-colors"
                 whileHover={{ scale: 1.02 }}
                 whileTap={{ scale: 0.98 }}
               >
                 <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/20">
                   <ExternalLink className="w-8 h-8 text-white" />
                 </div>
                 <span className="text-white font-bold text-lg">Launch Prototype</span>
                 <span className="text-xs text-zinc-500 mt-2 px-6 text-center italic">
                   Uber AI Safety Flow
                 </span>
                 <div className="mt-8 flex items-center gap-2 text-blue-400 text-xs font-medium">
                   <span>View in AI Studio</span>
                   <ChevronRight className="w-3 h-3" />
                 </div>
               </motion.a>
            </div>
          </div>
        </section>

        {/* Documentation Section */}
        <section className="py-24 border-t border-zinc-900">
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-600 mb-16">PRD & Documentation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Uber AI Safety PRD", desc: "Full product requirements for the safety-critical AI monitoring system.", group: "Uber" },
              { title: "Strava Guided Experience PRD", desc: "Comprehensive product requirements for the beginner-focused coaching suite.", group: "Strava" },
              { title: "Strava Phase 2 Research", desc: "In-depth user research focusing on beginner consistency and guidance gaps.", group: "Strava" },
              { title: "Strava Phase 3: Strategy", desc: "Solution ideation, RICE prioritization, and success metrics for beginner growth.", group: "Strava" },
              { title: "Strava Improvement Phase 1-3", desc: "User research, PIF prioritization, and feature ideation for beginner growth.", group: "Strava" },
              { title: "HR Chatbot Product PRD", desc: "Enterprise RAG-based assistant for instant, cited answers to HR policy queries.", group: "HR AI" },
              { title: "HR Chatbot Technical Spec", desc: "RAG pipeline architecture, chunking strategy, and RBAC implementation.", group: "HR AI" },
            ].map((doc: any, i: number) => (
              <div key={i} className="p-6 bg-zinc-900/30 border border-zinc-900 rounded-xl hover:border-zinc-700 transition-colors group cursor-pointer flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <FileText className="w-6 h-6 text-zinc-500 group-hover:text-blue-500 transition-colors" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-600">{doc.group}</span>
                  </div>
                  <h4 className="text-white font-bold mb-2">{doc.title}</h4>
                  <p className="text-sm text-zinc-500 mb-4">{doc.desc}</p>
                </div>
                {(doc.link || doc.title === "Uber AI Safety PRD" || doc.title === "Strava Guided Experience PRD" || doc.title === "Strava Phase 2 Research" || doc.title === "Strava Phase 3: Strategy" || doc.title === "Strava Improvement Phase 1-3" || doc.title === "HR Chatbot Product PRD") && (
                  <div className="mt-auto flex flex-col gap-3">
                    {doc.link && (
                      <a 
                        href={doc.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-bold text-blue-500 hover:text-blue-400 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-3 h-3" />
                        View Live Prototype
                      </a>
                    )}
                    {(doc.title === "Uber AI Safety PRD" || doc.title === "Strava Guided Experience PRD" || doc.title === "HR Chatbot Product PRD") && (
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          if (doc.title === "Uber AI Safety PRD") setIsPRDOpen(true);
                          else if (doc.title === "Strava Guided Experience PRD") setIsStravaPRDOpen(true);
                          else setIsHRPRDOpen(true);
                        }}
                        className="inline-flex items-center gap-2 text-xs font-bold text-zinc-400 hover:text-white transition-colors"
                      >
                        <FileText className="w-3 h-3" />
                        Read Full PRD
                      </button>
                    )}
                    {doc.title === "Strava Phase 3: Strategy" && (
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsStravaPhase3Open(true);
                        }}
                        className="inline-flex items-center gap-2 text-xs font-bold text-zinc-400 hover:text-white transition-colors"
                      >
                        <FileText className="w-3 h-3" />
                        Read Full Strategy
                      </button>
                    )}
                    {(doc.title === "Strava Phase 2 Research" || doc.title === "Strava Improvement Phase 1-3") && (
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsStravaOpen(true);
                        }}
                        className="inline-flex items-center gap-2 text-xs font-bold text-zinc-400 hover:text-white transition-colors"
                      >
                        <FileText className="w-3 h-3" />
                        Read Full Analysis
                      </button>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-24 border-t border-zinc-900">
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-600 mb-16">Skills & Expertise</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <h4 className="flex items-center gap-2 text-white font-bold mb-6">
                <Cpu className="w-4 h-4 text-blue-500" /> AI / ML
              </h4>
              <ul className="space-y-3 text-sm">
                <li>RAG Architectures</li>
                <li>LLM Prompt Engineering</li>
                <li>Model Evaluation (LLM-as-a-Judge)</li>
                <li>Fine-tuning (PEFT/LoRA)</li>
              </ul>
            </div>
            <div>
              <h4 className="flex items-center gap-2 text-white font-bold mb-6">
                <Layers className="w-4 h-4 text-blue-500" /> Product
              </h4>
              <ul className="space-y-3 text-sm">
                <li>PRD Development</li>
                <li>PIF/RICE Prioritization</li>
                <li>User Research & Personas</li>
                <li>Growth & Retention Strategy</li>
              </ul>
            </div>
            <div>
              <h4 className="flex items-center gap-2 text-white font-bold mb-6">
                <Database className="w-4 h-4 text-blue-500" /> Data & Cloud
              </h4>
              <ul className="space-y-3 text-sm">
                <li>Vector Databases</li>
                <li>Telemetry Analysis</li>
                <li>A/B Testing</li>
                <li>SQL / Data Visualization</li>
              </ul>
            </div>
            <div>
              <h4 className="flex items-center gap-2 text-white font-bold mb-6">
                <Zap className="w-4 h-4 text-blue-500" /> Tools
              </h4>
              <ul className="space-y-3 text-sm">
                <li>Figma (Wireframing)</li>
                <li>Jira / Linear</li>
                <li>Mixpanel / Amplitude</li>
                <li>Python / Notebooks</li>
              </ul>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-24 border-t border-zinc-900">
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-600 mb-16">About</h2>
          <p className="text-2xl text-zinc-300 max-w-3xl leading-relaxed">
            I am an AI Product Manager focused on bridging the gap between complex machine learning architectures and high-stakes user needs. My approach prioritizes precision over hype—building systems where safety, grounding, and measurable impact are the foundational requirements, not just features.
          </p>
        </section>

        {/* Contact Section */}
        <footer className="py-24 border-t border-zinc-900 mb-32">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
            <div>
              <h2 className="text-4xl font-bold text-white mb-4">Let's connect.</h2>
              <p className="text-zinc-500">Open to AI Product roles and collaborations.</p>
            </div>
            <div className="flex flex-wrap gap-12">
              <div className="flex flex-col gap-2">
                <a href="https://www.linkedin.com/in/gauri-yadav-2231301b0/" className="flex items-center gap-2 text-white hover:text-blue-500 transition-colors">
                  <Linkedin className="w-5 h-5" /> LinkedIn
                </a>
                <span className="text-[10px] text-zinc-600 font-mono">linkedin.com/in/gauri-yadav-2231301b0/</span>
              </div>
              <div className="flex flex-col gap-2">
                <button 
                  onClick={() => setIsResumeOpen(true)}
                  className="flex items-center gap-2 text-white hover:text-blue-500 transition-colors"
                >
                  <FileText className="w-5 h-5" /> Resume
                </button>
              </div>
              <div className="flex flex-col gap-2">
                <a href="mailto:yadavgauri07@gmail.com" className="flex items-center gap-2 text-white hover:text-blue-500 transition-colors">
                  <Mail className="w-5 h-5" /> Email
                </a>
                <span className="text-[10px] text-zinc-600 font-mono">yadavgauri07@gmail.com</span>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

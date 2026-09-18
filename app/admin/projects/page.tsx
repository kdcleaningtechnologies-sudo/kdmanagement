"use client";

import React, { useState, useEffect } from "react";
import {
  Save,
  CheckCircle2,
  Plus,
  Trash2,
  Edit,
  RefreshCw,
} from "lucide-react";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { caseStudiesData as initialProjects, CaseStudy } from "@/content/caseStudies";

export default function AdminProjectsPage() {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>(initialProjects);
  const [saving, setSaving] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/api/admin/content?section=caseStudies");
        if (res.ok) {
          const data = await res.json();
          if (data.caseStudies) {
            setCaseStudies(data.caseStudies);
          }
        }
      } catch (e) {
        console.error("Fetch projects error:", e);
      }
    };
    fetchProjects();
  }, []);

  const handleUpdate = (index: number, updates: Partial<CaseStudy>) => {
    const updated = [...caseStudies];
    updated[index] = { ...updated[index], ...updates };
    setCaseStudies(updated);
  };

  const handleAddProject = () => {
    const newProject: CaseStudy = {
      id: `project-${Date.now()}`,
      title: "New Corporate Campus Case Study",
      facilityType: "Commercial IT Park (450,000 sq.ft.)",
      location: "Golf Course Road, Gurgaon",
      scope: ["Corporate Housekeeping", "24/7 PASARA Security", "Autonomous Façade Wash"],
      challenge: "High contractor absenteeism and lack of mechanized glass façade upkeep.",
      solution: "Deployed biometric geo-fenced kiosks, 15% backup float, and autonomous pure-water facade washing.",
      impactPreview: [
        "100% shift fill rate maintained consistently over 12 months",
        "Zero cradle scaffolding risk on exterior glass envelopes",
        "22% reduction in annual facility water consumption",
      ],
      isTemplateNotice: false,
    };
    setCaseStudies([newProject, ...caseStudies]);
    setEditingId(newProject.id);
  };

  const handleDelete = (id: string) => {
    if (!confirm("Are you sure you want to delete this case study?")) return;
    setCaseStudies(caseStudies.filter((c) => c.id !== id));
  };

  const handleSave = async () => {
    try {
      setSaving(true);
      setSavedSuccess(false);

      const res = await fetch("/api/admin/content", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ caseStudies }),
      });

      if (res.ok) {
        setSavedSuccess(true);
        setTimeout(() => setSavedSuccess(false), 4000);
      }
    } catch (e) {
      console.error("Save projects error:", e);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="pb-20">
      <AdminHeader
        title="Projects & Client Case Studies"
        subtitle={`Managing ${caseStudies.length} enterprise case studies highlighting verifiable operational ROI.`}
        actions={
          <div className="flex items-center gap-2">
            <button
              onClick={handleAddProject}
              className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold border border-slate-300 transition-colors inline-flex items-center gap-1.5 cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Case Study</span>
            </button>
            <button
              onClick={handleSave}
              disabled={saving}
              className="px-5 py-2 rounded-xl bg-brandgreen-500 hover:bg-brandgreen-600 text-navy-950 font-bold text-xs shadow-md inline-flex items-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {saving ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
              <span>{saving ? "Saving..." : "Save Case Studies"}</span>
            </button>
          </div>
        }
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-8 pt-6 space-y-6">
        {savedSuccess && (
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs font-bold flex items-center gap-2 shadow-sm animate-fade-in">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Case studies and performance data saved successfully!</span>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {caseStudies.map((study, idx) => {
            const isEditing = editingId === study.id;

            return (
              <div
                key={study.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-3 border-b border-slate-100 pb-3">
                    <div>
                      {isEditing ? (
                        <input
                          type="text"
                          value={study.title}
                          onChange={(e) => handleUpdate(idx, { title: e.target.value })}
                          className="font-bold text-navy-950 text-base bg-slate-50 border border-slate-300 rounded p-1.5 w-full"
                        />
                      ) : (
                        <h3 className="font-bold text-navy-950 text-base">{study.title}</h3>
                      )}
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs font-semibold text-brandgreen-700">
                          {study.facilityType}
                        </span>
                        <span className="text-slate-400">•</span>
                        <span className="text-xs text-slate-500">{study.location}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => setEditingId(isEditing ? null : study.id)}
                        className="p-1.5 rounded-lg text-slate-600 hover:bg-slate-100"
                        title="Edit"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(study.id)}
                        className="p-1.5 rounded-lg text-rose-500 hover:bg-rose-50"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {isEditing ? (
                    <div className="space-y-3 text-xs">
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block font-semibold text-slate-600 mb-1">Facility Type</label>
                          <input
                            type="text"
                            value={study.facilityType}
                            onChange={(e) => handleUpdate(idx, { facilityType: e.target.value })}
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2"
                          />
                        </div>
                        <div>
                          <label className="block font-semibold text-slate-600 mb-1">Location</label>
                          <input
                            type="text"
                            value={study.location}
                            onChange={(e) => handleUpdate(idx, { location: e.target.value })}
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block font-semibold text-slate-600 mb-1">Initial Problem / Challenge</label>
                        <textarea
                          rows={2}
                          value={study.challenge}
                          onChange={(e) => handleUpdate(idx, { challenge: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2"
                        />
                      </div>

                      <div>
                        <label className="block font-semibold text-slate-600 mb-1">KD Implemented Solution</label>
                        <textarea
                          rows={2}
                          value={study.solution}
                          onChange={(e) => handleUpdate(idx, { solution: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2"
                        />
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="p-3 rounded-xl bg-slate-50 text-xs space-y-2">
                        <div>
                          <strong className="text-slate-700 block text-[11px]">Challenge:</strong>
                          <p className="text-slate-600">{study.challenge}</p>
                        </div>
                        <div>
                          <strong className="text-slate-700 block text-[11px]">KD Solution:</strong>
                          <p className="text-slate-600">{study.solution}</p>
                        </div>
                      </div>

                      {/* SLA Outcome Metrics */}
                      <div className="space-y-1.5 pt-1">
                        <strong className="text-[11px] font-bold text-navy-950 uppercase tracking-wider block">
                          Impact & Outcomes:
                        </strong>
                        <ul className="space-y-1 text-xs text-slate-600">
                          {study.impactPreview.map((imp, impIdx) => (
                            <li key={impIdx} className="flex items-start gap-1.5">
                              <span className="text-brandgreen-600 font-bold">•</span>
                              <span>{imp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                  <span>ID: {study.id}</span>
                  <span className="font-semibold text-slate-600">{study.location}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-end pt-4">
          <button
            onClick={handleSave}
            disabled={saving}
            className="px-8 py-3.5 rounded-xl bg-brandgreen-500 hover:bg-brandgreen-600 text-navy-950 font-extrabold text-sm shadow-lg transition-all inline-flex items-center gap-2 cursor-pointer disabled:opacity-50"
          >
            {saving ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
            <span>{saving ? "Saving Changes..." : "Save Case Studies"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

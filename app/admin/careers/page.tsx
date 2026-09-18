"use client";

import React, { useState, useEffect } from "react";
import {
  Plus,
  Trash2,
  Edit,
  Save,
  CheckCircle2,
  RefreshCw,
} from "lucide-react";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { careersData as initialCareersData, JobOpening } from "@/content/careers";

export default function AdminCareersPage() {
  const [careers, setCareers] = useState(initialCareersData);
  const [openings, setOpenings] = useState<JobOpening[]>(initialCareersData.openings);
  const [saving, setSaving] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [editingJobId, setEditingJobId] = useState<string | null>(null);

  useEffect(() => {
    const fetchCareers = async () => {
      try {
        const res = await fetch("/api/admin/content?section=careers");
        if (res.ok) {
          const data = await res.json();
          if (data.careers) {
            setCareers(data.careers);
            setOpenings(data.careers.openings || initialCareersData.openings);
          }
        }
      } catch (e) {
        console.error("Fetch careers error:", e);
      }
    };
    fetchCareers();
  }, []);

  const handleUpdateJob = (index: number, updates: Partial<JobOpening>) => {
    const updated = [...openings];
    updated[index] = { ...updated[index], ...updates };
    setOpenings(updated);
  };

  const handleAddJob = () => {
    const newJob: JobOpening = {
      id: `job-${Date.now()}`,
      title: "New Role Position",
      department: "Operations (IFM)",
      location: "Gurugram / Delhi NCR",
      type: "Full-Time",
      experience: "2-4 Years",
      description: "Overview of responsibilities and scope for this role.",
      requirements: [
        "Prior experience in corporate or commercial facility management",
        "Strong leadership, team management, and SLA compliance skills",
        "Knowledge of statutory compliance (EPFO, ESIC, safety gear)",
      ],
    };
    setOpenings([newJob, ...openings]);
    setEditingJobId(newJob.id);
  };

  const handleDeleteJob = (id: string) => {
    if (!confirm("Are you sure you want to delete this job posting?")) return;
    setOpenings(openings.filter((j) => j.id !== id));
  };

  const handleSave = async () => {
    try {
      setSaving(true);
      setSavedSuccess(false);

      const payload = {
        careers: {
          ...careers,
          openings,
        },
      };

      const res = await fetch("/api/admin/content", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setSavedSuccess(true);
        setTimeout(() => setSavedSuccess(false), 4000);
      }
    } catch (e) {
      console.error("Save careers error:", e);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="pb-20">
      <AdminHeader
        title="Careers & Ground Hiring"
        subtitle={`Managing ${openings.length} job openings for facility managers, supervisors, technicians, and marshals.`}
        actions={
          <div className="flex items-center gap-2">
            <button
              onClick={handleAddJob}
              className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold border border-slate-300 transition-colors inline-flex items-center gap-1.5 cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Job Opening</span>
            </button>
            <button
              onClick={handleSave}
              disabled={saving}
              className="px-5 py-2 rounded-xl bg-brandgreen-500 hover:bg-brandgreen-600 text-navy-950 font-bold text-xs shadow-md inline-flex items-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {saving ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
              <span>{saving ? "Saving..." : "Save Openings"}</span>
            </button>
          </div>
        }
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-8 pt-6 space-y-6">
        {savedSuccess && (
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs font-bold flex items-center gap-2 shadow-sm animate-fade-in">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Job postings and recruitment settings saved successfully!</span>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {openings.map((job, idx) => {
            const isEditing = editingJobId === job.id;

            return (
              <div
                key={job.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-3 border-b border-slate-100 pb-3">
                    <div>
                      {isEditing ? (
                        <input
                          type="text"
                          value={job.title}
                          onChange={(e) => handleUpdateJob(idx, { title: e.target.value })}
                          className="font-bold text-navy-950 text-base bg-slate-50 border border-slate-300 rounded p-1.5 w-full"
                        />
                      ) : (
                        <h3 className="font-bold text-navy-950 text-base">{job.title}</h3>
                      )}
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs font-semibold text-brandgreen-700">
                          {job.department}
                        </span>
                        <span className="text-slate-400">•</span>
                        <span className="text-xs text-slate-500">{job.location}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => setEditingJobId(isEditing ? null : job.id)}
                        className="p-1.5 rounded-lg text-slate-600 hover:bg-slate-100"
                        title="Edit Job"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteJob(job.id)}
                        className="p-1.5 rounded-lg text-rose-500 hover:bg-rose-50"
                        title="Delete Job"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {isEditing ? (
                    <div className="space-y-3 text-xs">
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block font-semibold text-slate-600 mb-1">Department</label>
                          <input
                            type="text"
                            value={job.department}
                            onChange={(e) => handleUpdateJob(idx, { department: e.target.value })}
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2"
                          />
                        </div>
                        <div>
                          <label className="block font-semibold text-slate-600 mb-1">Location</label>
                          <input
                            type="text"
                            value={job.location}
                            onChange={(e) => handleUpdateJob(idx, { location: e.target.value })}
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block font-semibold text-slate-600 mb-1">Experience Required</label>
                          <input
                            type="text"
                            value={job.experience}
                            onChange={(e) => handleUpdateJob(idx, { experience: e.target.value })}
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2"
                          />
                        </div>
                        <div>
                          <label className="block font-semibold text-slate-600 mb-1">Job Type</label>
                          <input
                            type="text"
                            value={job.type}
                            onChange={(e) => handleUpdateJob(idx, { type: e.target.value })}
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block font-semibold text-slate-600 mb-1">Job Summary</label>
                        <textarea
                          rows={2}
                          value={job.description}
                          onChange={(e) => handleUpdateJob(idx, { description: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2"
                        />
                      </div>
                    </div>
                  ) : (
                    <>
                      <p className="text-xs text-slate-600 leading-relaxed">{job.description}</p>
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs flex items-center justify-between">
                        <span className="text-slate-600">
                          Experience: <strong>{job.experience}</strong>
                        </span>
                        <span className="font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                          {job.type}
                        </span>
                      </div>
                    </>
                  )}
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                  <span>Job ID: {job.id}</span>
                  <span className="text-brandgreen-700 font-semibold">{job.location}</span>
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
            <span>{saving ? "Saving Changes..." : "Save Job Openings"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

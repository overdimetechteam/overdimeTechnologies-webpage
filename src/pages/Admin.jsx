import { useState, useEffect } from 'react'
import { Plus, Trash2, Edit2, Save, X, Lock, LogOut, Briefcase } from 'lucide-react'

const PIN = 'overdime2024'
const STORAGE_KEY = 'overdime_jobs'

const defaultJobs = [
  { id: 1, title: 'Senior Automation Engineer', subtitle: 'RPA / Workato / UiPath', type: 'Full-time', level: 'Senior', active: true },
  { id: 2, title: 'AI Solutions Architect', subtitle: 'OpenAI / Claude / Gemini', type: 'Full-time', level: 'Senior', active: true },
  { id: 3, title: 'Full Stack Developer', subtitle: 'React / Node / Python', type: 'Full-time / Freelance', level: 'Mid–Senior', active: true },
  { id: 4, title: 'Business Analyst', subtitle: 'Process Automation', type: 'Full-time', level: 'Mid', active: true },
  { id: 5, title: 'Project Manager', subtitle: 'Digital Transformation', type: 'Full-time', level: 'Senior', active: true },
]

function getJobs() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : defaultJobs
  } catch {
    return defaultJobs
  }
}

function saveJobs(jobs) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(jobs))
}

const emptyForm = { title: '', subtitle: '', type: 'Full-time', level: 'Mid', active: true }
const typeOptions = ['Full-time', 'Freelance', 'Full-time / Freelance', 'Contract', 'Part-time']
const levelOptions = ['Junior', 'Mid', 'Mid–Senior', 'Senior', 'Lead']

export default function Admin() {
  const [authed, setAuthed] = useState(() => sessionStorage.getItem('admin_auth') === '1')
  const [pin, setPin] = useState('')
  const [pinError, setPinError] = useState(false)
  const [jobs, setJobs] = useState(getJobs)
  const [form, setForm] = useState(emptyForm)
  const [editId, setEditId] = useState(null)
  const [showForm, setShowForm] = useState(false)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    if (authed) saveJobs(jobs)
  }, [jobs, authed])

  const login = () => {
    if (pin === PIN) {
      sessionStorage.setItem('admin_auth', '1')
      setAuthed(true)
      setPinError(false)
    } else {
      setPinError(true)
      setPin('')
    }
  }

  const logout = () => {
    sessionStorage.removeItem('admin_auth')
    setAuthed(false)
    setPin('')
  }

  const openAdd = () => {
    setForm(emptyForm)
    setEditId(null)
    setShowForm(true)
  }

  const openEdit = (job) => {
    setForm({ title: job.title, subtitle: job.subtitle, type: job.type, level: job.level, active: job.active })
    setEditId(job.id)
    setShowForm(true)
  }

  const cancelForm = () => { setShowForm(false); setEditId(null); setForm(emptyForm) }

  const submitForm = () => {
    if (!form.title.trim()) return
    if (editId !== null) {
      setJobs(j => j.map(x => x.id === editId ? { ...x, ...form } : x))
    } else {
      setJobs(j => [...j, { ...form, id: Date.now() }])
    }
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
    cancelForm()
  }

  const deleteJob = (id) => {
    if (!confirm('Delete this position?')) return
    setJobs(j => j.filter(x => x.id !== id))
  }

  const toggleActive = (id) => {
    setJobs(j => j.map(x => x.id === id ? { ...x, active: !x.active } : x))
  }

  // ── PIN GATE ──
  if (!authed) {
    return (
      <div style={{ minHeight: '100vh', background: '#0A2540', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
        <div style={{ background: '#fff', borderRadius: 20, padding: 48, width: '100%', maxWidth: 400, textAlign: 'center', boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}>
          <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(0,176,237,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
            <Lock size={28} color="#00B0ED" />
          </div>
          <h1 style={{ fontSize: 24, color: '#0A2540', marginBottom: 8 }}>Admin Panel</h1>
          <p style={{ color: '#8A8A8A', fontSize: 14, marginBottom: 32 }}>Overdime Technologies — Job Management</p>

          <input
            type="password"
            value={pin}
            onChange={e => { setPin(e.target.value); setPinError(false) }}
            onKeyDown={e => e.key === 'Enter' && login()}
            placeholder="Enter PIN"
            style={{
              width: '100%', padding: '14px 16px', border: pinError ? '2px solid #ef4444' : '2px solid #E5E7EB',
              borderRadius: 10, fontSize: 18, textAlign: 'center', letterSpacing: '0.3em',
              outline: 'none', marginBottom: 8, fontFamily: 'Inter',
            }}
          />
          {pinError && <p style={{ color: '#ef4444', fontSize: 13, marginBottom: 12 }}>Incorrect PIN. Try again.</p>}
          {!pinError && <div style={{ height: 20 }} />}

          <button onClick={login} className="btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: 16 }}>
            Sign In
          </button>
        </div>
      </div>
    )
  }

  // ── ADMIN PANEL ──
  return (
    <div style={{ minHeight: '100vh', background: '#F0F2F5' }}>
      {/* Admin header */}
      <div style={{ background: '#0A2540', padding: '0 24px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <img src="/logo.jpg" alt="Overdime" style={{ height: 48 }} />
            <div>
              <div style={{ color: '#fff', fontWeight: 700, fontSize: 15, fontFamily: 'Plus Jakarta Sans' }}>Admin Panel</div>
              <div style={{ color: '#00B0ED', fontSize: 12 }}>Job Vacancy Management</div>
            </div>
          </div>
          <button onClick={logout} style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.08)', border: 'none', color: 'rgba(255,255,255,0.7)', padding: '8px 16px', borderRadius: 8, cursor: 'pointer', fontSize: 14 }}>
            <LogOut size={16} /> Sign Out
          </button>
        </div>
      </div>

      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '40px 24px' }}>
        {/* Top bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 28, flexWrap: 'wrap', gap: 16 }}>
          <div>
            <h2 style={{ fontSize: 26, color: '#0A2540', margin: 0 }}>Open Positions</h2>
            <p style={{ color: '#8A8A8A', fontSize: 14, marginTop: 4 }}>
              {jobs.filter(j => j.active).length} active · {jobs.filter(j => !j.active).length} hidden
            </p>
          </div>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            {saved && <span style={{ color: '#22c55e', fontSize: 14, fontWeight: 600 }}>✓ Saved to website</span>}
            <button onClick={openAdd} className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Plus size={18} /> Add Position
            </button>
          </div>
        </div>

        {/* Add / Edit form */}
        {showForm && (
          <div style={{ background: '#fff', borderRadius: 16, padding: 32, marginBottom: 24, border: '2px solid #00B0ED', boxShadow: '0 4px 24px rgba(0,176,237,0.12)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
              <h3 style={{ fontSize: 18, margin: 0 }}>{editId ? 'Edit Position' : 'Add New Position'}</h3>
              <button onClick={cancelForm} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#8A8A8A' }}><X size={20} /></button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
              <div>
                <label style={labelStyle}>Job Title *</label>
                <input value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} placeholder="e.g. Senior Developer" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Subtitle / Stack</label>
                <input value={form.subtitle} onChange={e => setForm(f => ({ ...f, subtitle: e.target.value }))} placeholder="e.g. React / Node / Python" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Employment Type</label>
                <select value={form.type} onChange={e => setForm(f => ({ ...f, type: e.target.value }))} style={inputStyle}>
                  {typeOptions.map(o => <option key={o}>{o}</option>)}
                </select>
              </div>
              <div>
                <label style={labelStyle}>Level</label>
                <select value={form.level} onChange={e => setForm(f => ({ ...f, level: e.target.value }))} style={inputStyle}>
                  {levelOptions.map(o => <option key={o}>{o}</option>)}
                </select>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
              <input type="checkbox" id="active" checked={form.active} onChange={e => setForm(f => ({ ...f, active: e.target.checked }))} style={{ width: 16, height: 16 }} />
              <label htmlFor="active" style={{ color: '#1F2937', fontSize: 14, cursor: 'pointer' }}>Show on website (active)</label>
            </div>

            <div style={{ display: 'flex', gap: 12 }}>
              <button onClick={submitForm} className="btn-gold" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <Save size={16} /> {editId ? 'Save Changes' : 'Add Position'}
              </button>
              <button onClick={cancelForm} className="btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Job list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {jobs.length === 0 && (
            <div style={{ textAlign: 'center', padding: 64, background: '#fff', borderRadius: 16, color: '#8A8A8A' }}>
              <Briefcase size={40} style={{ marginBottom: 16, opacity: 0.3 }} />
              <p>No positions yet. Click "Add Position" to get started.</p>
            </div>
          )}
          {jobs.map(job => (
            <div key={job.id} style={{
              background: '#fff', borderRadius: 14, padding: '20px 24px',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              border: `1px solid ${job.active ? '#E5E7EB' : '#f3f4f6'}`,
              opacity: job.active ? 1 : 0.55,
              flexWrap: 'wrap', gap: 12,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, flex: 1 }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: job.active ? 'rgba(0,176,237,0.1)' : '#F0F2F5', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Briefcase size={18} color={job.active ? '#00B0ED' : '#8A8A8A'} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: '#0A2540', fontSize: 15, fontFamily: 'Plus Jakarta Sans' }}>{job.title}</div>
                  <div style={{ color: '#8A8A8A', fontSize: 13 }}>{job.subtitle}</div>
                  <div style={{ display: 'flex', gap: 8, marginTop: 6 }}>
                    <span style={{ background: 'rgba(0,176,237,0.1)', color: '#0072a3', padding: '2px 10px', borderRadius: 100, fontSize: 11, fontWeight: 600 }}>{job.type}</span>
                    <span style={{ background: '#F0F2F5', color: '#4B5563', padding: '2px 10px', borderRadius: 100, fontSize: 11, fontWeight: 600 }}>{job.level}</span>
                    {!job.active && <span style={{ background: '#FEF2F2', color: '#ef4444', padding: '2px 10px', borderRadius: 100, fontSize: 11, fontWeight: 600 }}>Hidden</span>}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <button
                  onClick={() => toggleActive(job.id)}
                  title={job.active ? 'Hide from website' : 'Show on website'}
                  style={{ padding: '8px 14px', borderRadius: 8, border: '1px solid #E5E7EB', background: '#F0F2F5', cursor: 'pointer', fontSize: 12, fontWeight: 600, color: '#4B5563' }}
                >
                  {job.active ? 'Hide' : 'Show'}
                </button>
                <button onClick={() => openEdit(job)} title="Edit" style={{ width: 36, height: 36, borderRadius: 8, border: '1px solid #E5E7EB', background: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Edit2 size={15} color="#4B5563" />
                </button>
                <button onClick={() => deleteJob(job.id)} title="Delete" style={{ width: 36, height: 36, borderRadius: 8, border: '1px solid #FEE2E2', background: '#FEF2F2', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Trash2 size={15} color="#ef4444" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 32, padding: 20, background: '#fff', borderRadius: 12, border: '1px solid #E5E7EB' }}>
          <p style={{ color: '#8A8A8A', fontSize: 13, margin: 0 }}>
            <strong style={{ color: '#0A2540' }}>How it works:</strong> Changes save automatically to the website. Active positions appear on the Careers page. Hidden positions are stored but not shown publicly.
            <br />Access this panel at <strong>/admin</strong> · PIN: <strong>overdime2024</strong> (change in <code>src/pages/Admin.jsx</code>)
          </p>
        </div>
      </div>
    </div>
  )
}

const labelStyle = { display: 'block', fontWeight: 600, color: '#0A2540', fontSize: 13, marginBottom: 6 }
const inputStyle = { width: '100%', padding: '11px 14px', border: '1px solid #E5E7EB', borderRadius: 8, fontSize: 14, color: '#1F2937', outline: 'none', fontFamily: 'Inter', background: '#fff' }

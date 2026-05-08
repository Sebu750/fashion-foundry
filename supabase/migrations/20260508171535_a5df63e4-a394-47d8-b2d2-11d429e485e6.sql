
CREATE TABLE public.sponsor_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  company TEXT NOT NULL,
  contact_name TEXT NOT NULL,
  work_email TEXT NOT NULL,
  role TEXT,
  sponsor_tier TEXT,
  budget_range TEXT,
  message TEXT,
  source TEXT DEFAULT 'landing_page',
  user_agent TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.sponsor_requests ENABLE ROW LEVEL SECURITY;

-- Anyone (including anon) can submit a sponsorship request
CREATE POLICY "Anyone can submit sponsor requests"
  ON public.sponsor_requests
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    length(company) BETWEEN 1 AND 200
    AND length(contact_name) BETWEEN 1 AND 200
    AND length(work_email) BETWEEN 3 AND 320
    AND work_email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
    AND (message IS NULL OR length(message) <= 2000)
  );

-- No SELECT policy => no one can read via public API (admin only via service role)

CREATE INDEX idx_sponsor_requests_created_at ON public.sponsor_requests (created_at DESC);

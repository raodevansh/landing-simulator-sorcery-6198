-- Allow public access to insert emails into the email; table
-- Since this is a public email signup form, we need to allow anonymous users to insert
ALTER TABLE public."email;" ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert emails (for public signup form)
CREATE POLICY "Allow public email signups" 
ON public."email;" 
FOR INSERT 
TO public 
WITH CHECK (true);

-- Create policy to allow reading emails (if needed for admin purposes)
CREATE POLICY "Allow reading emails" 
ON public."email;" 
FOR SELECT 
TO public 
USING (true);
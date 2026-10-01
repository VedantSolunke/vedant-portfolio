import type { SVGProps } from "react"

import { cn } from "@/lib/utils"

type BrandIconProps = SVGProps<SVGSVGElement>

function BrandIcon({
  path,
  className,
  ...props
}: BrandIconProps & { path: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn("size-4 shrink-0", className)}
      {...props}
    >
      <path d={path} />
    </svg>
  )
}

/** X (formerly Twitter) — path from Simple Icons (CC0). */
const xPath =
  "M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z"

/** LinkedIn — path from Simple Icons (CC0). */
const linkedInPath =
  "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"

/** GitHub — path from Simple Icons (CC0). */
const githubPath =
  "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"

/** LeetCode — path from Simple Icons (CC0). */
const leetCodePath =
  "M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513a5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"

/** Gmail — path from Simple Icons (CC0). */
const gmailPath =
  "M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-7.545-4.91v9.273H.818A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.279 24 3.434 24 5.457z"

/** Google Drive — path from Simple Icons (CC0). */
const googleDrivePath =
  "M12.545 10.239v3.821h5.445c-.64 2.939-3.154 5.122-6.295 5.122-3.741 0-6.775-3.034-6.775-6.775s3.034-6.775 6.775-6.775c1.645 0 3.157.583 4.332 1.557l3.153-3.153C17.357 1.676 14.977.75 12.545.75c-6.867 0-12.295 5.428-12.295 12.295s5.428 12.295 12.295 12.295c6.866 0 12.295-5.428 12.295-12.295 0-.826-.083-1.632-.238-2.409H12.545z"

export function XIcon({ className, ...props }: BrandIconProps) {
  return (
    <BrandIcon path={xPath} className={cn("fill-[#000000] dark:fill-[#E7E9EA]", className)} {...props} />
  )
}

export function LinkedInIcon(props: BrandIconProps) {
  return <BrandIcon path={linkedInPath} fill="#0A66C2" {...props} />
}

export function GitHubIcon({ className, ...props }: BrandIconProps) {
  return (
    <BrandIcon path={githubPath} className={cn("fill-[#181717] dark:fill-[#E6EDF3]", className)} {...props} />
  )
}

export function LeetCodeIcon(props: BrandIconProps) {
  return <BrandIcon path={leetCodePath} fill="#FFA116" {...props} />
}

export function GmailIcon(props: BrandIconProps) {
  return <BrandIcon path={gmailPath} fill="#EA4335" {...props} />
}

export function GoogleDriveIcon(props: BrandIconProps) {
  return <BrandIcon path={googleDrivePath} fill="#4285F4" {...props} />
}

export const socialBrandIcons = {
  X: XIcon,
  LinkedIn: LinkedInIcon,
  GitHub: GitHubIcon,
  LeetCode: LeetCodeIcon,
  Resume: GoogleDriveIcon,
  Email: GmailIcon,
} as const

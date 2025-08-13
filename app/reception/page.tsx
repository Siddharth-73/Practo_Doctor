"use client"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function ReceptionPage() {
  const router = useRouter()

  useEffect(() => {
    router.replace("/reception/overview")
  }, [router])

  return null
}

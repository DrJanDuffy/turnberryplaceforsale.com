'use client'

import { GetStaticPropsResult } from "next"
import Head from "next/head"
import { useState } from "react"
import { Layout, LayoutProps } from "components/layout"
import { getMenus } from "lib/get-menus"
import { Meta } from "components/meta"
import { JsonLdSchema } from "components/json-ld-schema"

interface SharePageProps extends LayoutProps {}

export default function SharePage({ menus }: SharePageProps) {
  const [formData, setFormData] = useState({
    friendname: "",
    friendemail: "",
    yourname: "",
    youremail: "",
    sharemessage: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<string[]>([])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors: string[] = []

    if (!formData.friendname.trim()) newErrors.push("Friend's name is required")
    if (!formData.friendemail.trim()) newErrors.push("Friend's email is required")
    if (!formData.yourname.trim()) newErrors.push("Your name is required")
    if (!formData.youremail.trim()) newErrors.push("Your email is required")
    if (formData.friendemail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.friendemail)) {
      newErrors.push("Friend's email is invalid")
    }
    if (formData.youremail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.youremail)) {
      newErrors.push("Your email is invalid")
    }

    if (newErrors.length > 0) {
      setErrors(newErrors)
      return
    }

    setErrors([])
    setSubmitted(true)
    // In production, this would send to an API endpoint
  }

  const resetForm = () => {
    setFormData({
      friendname: "",
      friendemail: "",
      yourname: "",
      youremail: "",
      sharemessage: "",
    })
    setSubmitted(false)
    setErrors([])
  }

  const shareUrl = typeof window !== "undefined" ? window.location.href : "https://www.turnberryplaceforsale.com"
  const shareTitle = "Turnberry Place Las Vegas | Luxury High-Rise Condos For Sale"
  const shareDescription = "Discover luxury high-rise condos for sale at Turnberry Place Las Vegas. Featuring 1-4 bedroom residences with Strip views, & exclusive Stirling Club"
  const shareImage = "https://photos.cribflyer-proxy.com/cdn-cgi/image/width=1200,height=630,fit=crop,rotate=0,format=auto,quality=85/4616/60013/2953237/photo.jpg"

  return (
    <Layout menus={menus}>
      <Meta title="Share - Turnberry Place Las Vegas" />
      <Head>
        <title>Share - Turnberry Place Las Vegas</title>
        <meta
          name="description"
          content="Share Turnberry Place Las Vegas luxury condos with friends. Social media sharing & send-to-friend form. Call/text 702-222-1964"
        />
      </Head>
      <JsonLdSchema type="property" />
      <div className="card-content py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h1 className="text-center mb-4">Share Turnberry Place Las Vegas</h1>
                
                {/* Social Share Buttons */}
                <div className="mb-5">
                  <h3 className="text-center mb-4">Share on Social Media</h3>
                  <div className="d-flex flex-wrap justify-content-center gap-3">
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      Facebook
                    </a>
                    <a
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareDescription)}&url=${encodeURIComponent(shareUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-info"
                    >
                      Twitter
                    </a>
                    <a
                      href={`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(shareUrl)}&media=${encodeURIComponent(shareImage)}&description=${encodeURIComponent(shareDescription)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-danger"
                    >
                      Pinterest
                    </a>
                    <a
                      href={`http://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>

                {/* Send to Friend Form */}
                <div className="border-top pt-4">
                  <h3 className="text-center mb-4">Or Send to a Friend</h3>
                  
                  {submitted ? (
                    <div className="text-center py-4">
                      <h4 className="text-success mb-3">
                        <i className="fa fa-check text-success"></i> Message Sent
                      </h4>
                      <button
                        onClick={resetForm}
                        className="btn btn-primary"
                      >
                        Send Again
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="share-form">
                      {errors.length > 0 && (
                        <div className="alert alert-danger">
                          <ul className="mb-0">
                            {errors.map((error, index) => (
                              <li key={index}>{error}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      <div className="row mb-3">
                        <div className="col-md-6">
                          <label htmlFor="friendname" className="form-label">
                            Friend's name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="friendname"
                            value={formData.friendname}
                            onChange={(e) =>
                              setFormData({ ...formData, friendname: e.target.value })
                            }
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="friendemail" className="form-label">
                            Friend's email
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="friendemail"
                            value={formData.friendemail}
                            onChange={(e) =>
                              setFormData({ ...formData, friendemail: e.target.value })
                            }
                            required
                          />
                        </div>
                      </div>

                      <div className="row mb-3">
                        <div className="col-md-6">
                          <label htmlFor="yourname" className="form-label">
                            Your name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="yourname"
                            value={formData.yourname}
                            onChange={(e) =>
                              setFormData({ ...formData, yourname: e.target.value })
                            }
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="youremail" className="form-label">
                            Your email
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="youremail"
                            value={formData.youremail}
                            onChange={(e) =>
                              setFormData({ ...formData, youremail: e.target.value })
                            }
                            required
                          />
                        </div>
                      </div>

                      <div className="mb-3">
                        <label htmlFor="sharemessage" className="form-label">
                          Optional message
                        </label>
                        <textarea
                          className="form-control"
                          id="sharemessage"
                          rows={4}
                          value={formData.sharemessage}
                          onChange={(e) =>
                            setFormData({ ...formData, sharemessage: e.target.value })
                          }
                        />
                      </div>

                      <div className="text-center">
                        <button type="submit" className="btn btn-primary btn-lg">
                          Send to Friend
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps(): Promise<GetStaticPropsResult<SharePageProps>> {
  return {
    props: {
      menus: await getMenus({} as any),
    },
  }
}

"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect } from "react"
import { ChevronRight, ArrowRight, CheckCircle, MapPin, Phone, Mail } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

export default function Home() {
  // Smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a[href^="#"]')

      if (anchor) {
        e.preventDefault()
        const targetId = anchor.getAttribute("href")
        if (targetId) {
          const targetElement = document.querySelector(targetId)
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" })
          }
        }
      }
    }

    document.addEventListener("click", handleAnchorClick)
    return () => document.removeEventListener("click", handleAnchorClick)
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-primary">NIOLLA</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#home" className="text-sm font-medium hover:text-primary">
              Home
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
            <Link href="#services" className="text-sm font-medium hover:text-primary">
              Services
            </Link>
            <Link href="#portfolio" className="text-sm font-medium hover:text-primary">
              Portfolio
            </Link>
            <Link href="#team" className="text-sm font-medium hover:text-primary">
              Team
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-primary">
              Testimonials
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button
              className="hidden md:inline-flex text-white"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get in Touch
            </Button>

            {/* Mobile Navigation */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <line x1="4" x2="20" y1="12" y2="12" />
                    <line x1="4" x2="20" y1="6" y2="6" />
                    <line x1="4" x2="20" y1="18" y2="18" />
                  </svg>
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <div className="flex justify-between items-center mb-6">
                  <Link href="/" className="flex items-center gap-2">
                    <span className="text-xl font-bold text-primary">NIOLLA</span>
                  </Link>
                  <SheetClose className="rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                    <span className="sr-only">Close</span>
                  </SheetClose>
                </div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm font-medium">Theme</span>
                  <ThemeToggle />
                </div>
                <nav className="flex flex-col gap-4">
                  <Link href="#home" className="text-base font-medium hover:text-primary">
                    Home
                  </Link>
                  <Link href="#about" className="text-base font-medium hover:text-primary">
                    About
                  </Link>
                  <Link href="#services" className="text-base font-medium hover:text-primary">
                    Services
                  </Link>
                  <Link href="#portfolio" className="text-base font-medium hover:text-primary">
                    Portfolio
                  </Link>
                  <Link href="#team" className="text-base font-medium hover:text-primary">
                    Team
                  </Link>
                  <Link href="#testimonials" className="text-base font-medium hover:text-primary">
                    Testimonials
                  </Link>
                  <Link href="#contact" className="text-base font-medium hover:text-primary">
                    Contact
                  </Link>
                </nav>
                <Button
                  className="w-full text-white mt-6"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Get in Touch
                </Button>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section
          id="home"
          className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-blue-950 to-blue-900 dark:from-blue-950 dark:to-blue-900"
        >
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col justify-center space-y-4 text-center"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none">
                  Empowering Businesses with Smart IT Solutions
                </h1>
                <p className="max-w-[800px] mx-auto text-gray-300 md:text-xl">
                  Transforming businesses through innovative technology solutions tailored to your needs.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                <Button
                  size="lg"
                  className="bg-blue-500 hover:bg-blue-600 text-white"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Get in Touch
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-gray-800 text-white border-gray-700 hover:bg-gray-700"
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Our Services
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-900 dark:bg-blue-900 dark:text-blue-100">
                  About Us
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Who We Are</h2>
                <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Niolla is a Sri Lankan IT solutions company dedicated to digitally transforming local
                  businesses. Founded in 2023 and based in Pothuhera, Sri Lanka, we specialize in business automation,
                  point-of-sales systems, and custom software development.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <Image
                src="/team.jpg?height=400&width=400"
                width={400}
                height={400}
                alt="About Niolla"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <motion.ul className="grid gap-6" variants={staggerContainer}>
                  <motion.li variants={fadeIn}>
                    <div className="grid gap-1">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                        <h3 className="text-xl font-bold">Our Mission</h3>
                      </div>
                      <p className="text-gray-500 dark:text-gray-400">
                        To provide innovative IT solutions that empower businesses to thrive in the digital age.
                      </p>
                    </div>
                  </motion.li>
                  <motion.li variants={fadeIn}>
                    <div className="grid gap-1">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                        <h3 className="text-xl font-bold">Our Vision</h3>
                      </div>
                      <p className="text-gray-500 dark:text-gray-400">
                        To be the leading IT solutions provider in Sri Lanka, known for excellence and innovation.
                      </p>
                    </div>
                  </motion.li>
                  <motion.li variants={fadeIn}>
                    <div className="grid gap-1">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                        <h3 className="text-xl font-bold">Our Values</h3>
                      </div>
                      <p className="text-gray-500 dark:text-gray-400">
                        Innovation, integrity, customer-centricity, and excellence in everything we do.
                      </p>
                    </div>
                  </motion.li>
                </motion.ul>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-900 dark:bg-blue-900 dark:text-blue-100">
                  Our Services
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What We Offer</h2>
                <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We provide comprehensive IT solutions tailored to meet the unique needs of your business.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn}>
                <Card className="transition-all hover:shadow-lg">
                  <CardHeader>
                    <CardTitle>Point of Sales (POS) Systems</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Streamline your retail or restaurant operations with our intuitive and powerful POS systems.
                    </CardDescription>
                    <Link
                      href="#contact"
                      className="mt-4 inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={fadeIn}>
                <Card className="transition-all hover:shadow-lg">
                  <CardHeader>
                    <CardTitle>Business Automation Tools</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Automate repetitive tasks and workflows to increase efficiency and reduce operational costs.
                    </CardDescription>
                    <Link
                      href="#contact"
                      className="mt-4 inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={fadeIn}>
                <Card className="transition-all hover:shadow-lg">
                  <CardHeader>
                    <CardTitle>Website & App Development</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Create stunning, responsive websites and mobile applications that engage your customers.
                    </CardDescription>
                    <Link
                      href="#contact"
                      className="mt-4 inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={fadeIn}>
                <Card className="transition-all hover:shadow-lg">
                  <CardHeader>
                    <CardTitle>Custom Software Solutions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Develop bespoke software solutions designed specifically for your business requirements.
                    </CardDescription>
                    <Link
                      href="#contact"
                      className="mt-4 inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-900 dark:bg-blue-900 dark:text-blue-100">
                  Our Portfolio
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Recent Projects</h2>
                <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore our successful implementations and see how we've helped businesses transform.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="mt-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <Tabs defaultValue="all">
                <TabsList className="mx-auto mb-8 flex justify-center">
                  <TabsTrigger value="all">All Projects</TabsTrigger>
                  <TabsTrigger value="pos">POS Systems</TabsTrigger>
                  <TabsTrigger value="automation">Automation</TabsTrigger>
                  <TabsTrigger value="development">Development</TabsTrigger>
                </TabsList>
                <TabsContent value="all" className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                  <motion.div variants={fadeIn}>
                    <Card className="overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=300&width=400"
                        width={400}
                        height={300}
                        alt="Project 1"
                        className="w-full h-48 object-cover"
                      />
                      <CardHeader>
                        <CardTitle>Restaurant POS System</CardTitle>
                        <CardDescription>
                          A comprehensive POS system for a chain of restaurants in Colombo.
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </motion.div>
                  <motion.div variants={fadeIn}>
                    <Card className="overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=300&width=400"
                        width={400}
                        height={300}
                        alt="Project 2"
                        className="w-full h-48 object-cover"
                      />
                      <CardHeader>
                        <CardTitle>Inventory Management System</CardTitle>
                        <CardDescription>Automated inventory tracking for a retail business in Kandy.</CardDescription>
                      </CardHeader>
                    </Card>
                  </motion.div>
                  <motion.div variants={fadeIn}>
                    <Card className="overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=300&width=400"
                        width={400}
                        height={300}
                        alt="Project 3"
                        className="w-full h-48 object-cover"
                      />
                      <CardHeader>
                        <CardTitle>E-commerce Website</CardTitle>
                        <CardDescription>A modern online store for a fashion retailer in Sri Lanka.</CardDescription>
                      </CardHeader>
                    </Card>
                  </motion.div>
                  <motion.div variants={fadeIn}>
                    <Card className="overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=300&width=400"
                        width={400}
                        height={300}
                        alt="Project 4"
                        className="w-full h-48 object-cover"
                      />
                      <CardHeader>
                        <CardTitle>HR Management Software</CardTitle>
                        <CardDescription>Custom HR solution for a manufacturing company.</CardDescription>
                      </CardHeader>
                    </Card>
                  </motion.div>
                  <motion.div variants={fadeIn}>
                    <Card className="overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=300&width=400"
                        width={400}
                        height={300}
                        alt="Project 5"
                        className="w-full h-48 object-cover"
                      />
                      <CardHeader>
                        <CardTitle>Mobile Banking App</CardTitle>
                        <CardDescription>Secure banking application for a local financial institution.</CardDescription>
                      </CardHeader>
                    </Card>
                  </motion.div>
                  <motion.div variants={fadeIn}>
                    <Card className="overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=300&width=400"
                        width={400}
                        height={300}
                        alt="Project 6"
                        className="w-full h-48 object-cover"
                      />
                      <CardHeader>
                        <CardTitle>School Management System</CardTitle>
                        <CardDescription>Comprehensive system for educational institutions.</CardDescription>
                      </CardHeader>
                    </Card>
                  </motion.div>
                </TabsContent>
                <TabsContent value="pos" className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                  <Card className="overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      width={400}
                      height={300}
                      alt="Project 1"
                      className="w-full h-48 object-cover"
                    />
                    <CardHeader>
                      <CardTitle>Restaurant POS System</CardTitle>
                      <CardDescription>
                        A comprehensive POS system for a chain of restaurants in Colombo.
                      </CardDescription>
                    </CardHeader>
                  </Card>
                  <Card className="overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      width={400}
                      height={300}
                      alt="Project 7"
                      className="w-full h-48 object-cover"
                    />
                    <CardHeader>
                      <CardTitle>Retail POS Solution</CardTitle>
                      <CardDescription>Modern point of sale system for a clothing store chain.</CardDescription>
                    </CardHeader>
                  </Card>
                </TabsContent>
                <TabsContent value="automation" className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                  <Card className="overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      width={400}
                      height={300}
                      alt="Project 2"
                      className="w-full h-48 object-cover"
                    />
                    <CardHeader>
                      <CardTitle>Inventory Management System</CardTitle>
                      <CardDescription>Automated inventory tracking for a retail business in Kandy.</CardDescription>
                    </CardHeader>
                  </Card>
                  <Card className="overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      width={400}
                      height={300}
                      alt="Project 4"
                      className="w-full h-48 object-cover"
                    />
                    <CardHeader>
                      <CardTitle>HR Management Software</CardTitle>
                      <CardDescription>Custom HR solution for a manufacturing company.</CardDescription>
                    </CardHeader>
                  </Card>
                </TabsContent>
                <TabsContent value="development" className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                  <Card className="overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      width={400}
                      height={300}
                      alt="Project 3"
                      className="w-full h-48 object-cover"
                    />
                    <CardHeader>
                      <CardTitle>E-commerce Website</CardTitle>
                      <CardDescription>A modern online store for a fashion retailer in Sri Lanka.</CardDescription>
                    </CardHeader>
                  </Card>
                  <Card className="overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      width={400}
                      height={300}
                      alt="Project 5"
                      className="w-full h-48 object-cover"
                    />
                    <CardHeader>
                      <CardTitle>Mobile Banking App</CardTitle>
                      <CardDescription>Secure banking application for a local financial institution.</CardDescription>
                    </CardHeader>
                  </Card>
                </TabsContent>
              </Tabs>
            </motion.div>
          </div>
        </section> */}

        <section id="team" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-900 dark:bg-blue-900 dark:text-blue-100">
                  Our Team
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet Our Experts</h2>
                <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our talented team of professionals is dedicated to delivering exceptional IT solutions.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn}>
                <Card className="text-center">
                  <CardHeader className="pb-0">
                    <div className="flex justify-center">
                      <Image
                        src="/team/hemaka.jpg?height=200&width=200"
                        width={200}
                        height={200}
                        alt="Team Member 1"
                        className="rounded-full h-32 w-32 object-cover"
                      />
                    </div>
                    <CardTitle className="mt-4">Hemaka Kalupahana</CardTitle>
                    <CardDescription>Chief Executive Officer / Marketing Lead</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Strategic thinker with expertise in business development and digital marketing.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={fadeIn}>
                <Card className="text-center">
                  <CardHeader className="pb-0">
                    <div className="flex justify-center">
                      <Image
                        src="/team/sathira.png?height=200&width=200"
                        width={200}
                        height={200}
                        alt="Team Member 2"
                        className="rounded-full h-32 w-32 object-cover"
                      />
                    </div>
                    <CardTitle className="mt-4">Sathira Sri Sathsara</CardTitle>
                    <CardDescription>Chief Operating Officer / Backend Developer</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Expert in database design and server-side architecture with 8+ years of experience.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={fadeIn}>
                <Card className="text-center">
                  <CardHeader className="pb-0">
                    <div className="flex justify-center">
                      <Image
                        src="/team/damidu.png?height=200&width=200"
                        width={200}
                        height={200}
                        alt="Team Member 3"
                        className="rounded-full h-32 w-32 object-cover"
                      />
                    </div>
                    <CardTitle className="mt-4">Damidu Sandeepa</CardTitle>
                    <CardDescription>Chief Technology Officer / Frontend Developer</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Skilled in creating beautiful, responsive user interfaces with modern frameworks with over 5 years experince.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={fadeIn}>
                <Card className="text-center">
                  <CardHeader className="pb-0">
                    <div className="flex justify-center">
                      <Image
                        src="/team/dinusha.jpg?height=200&width=200"
                        width={200}
                        height={200}
                        alt="Team Member 4"
                        className="rounded-full h-32 w-32 object-cover"
                      />
                    </div>
                    <CardTitle className="mt-4">Dinusha Lakshan</CardTitle>
                    <CardDescription>Logistics Managemnet & Marketing</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Dedicated to ensuring smooth operations and effective communication with clients.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-900 dark:bg-blue-900 dark:text-blue-100">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Clients Say</h2>
                <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Don't just take our word for it. Here's what our clients have to say about our services.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn}>
                <Card className="bg-blue-50 dark:bg-blue-950">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div>
                        <CardTitle className="text-base">Indika Susantha</CardTitle>
                        <CardDescription>Restaurant Owner, Panadura</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      "The POS system developed by Niolla has transformed our restaurant operations. It's intuitive,
                      reliable, and has significantly improved our efficiency."
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={fadeIn}>
                <Card className="bg-blue-50 dark:bg-blue-950">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div>
                        <CardTitle className="text-base">Kumara</CardTitle>
                        <CardDescription>Retail Store owner, Kurunagala</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      "The inventory management system has eliminated stockouts and overstocking issues. The team at
                      Niolla was professional and delivered exactly what we needed."
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={fadeIn}>
                <Card className="bg-blue-50 dark:bg-blue-950">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div>
                        <CardTitle className="text-base">Tharanga Sendadheera</CardTitle>
                        <CardDescription>TD Ayurveda</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      "Their attention to detail and understanding of our brand was impressive."
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
            {/* <motion.div
              className="mt-12 flex flex-wrap justify-center gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn}>
                <Image
                  src="/logos/evelynedge.png?height=60&width=120"
                  width={120}
                  height={60}
                  alt="Client Logo 1"
                  className="h-12 object-contain grayscale transition-all hover:grayscale-0"
                />
              </motion.div>
              <motion.div variants={fadeIn}>
                <Image
                  src="/placeholder.svg?height=60&width=120"
                  width={120}
                  height={60}
                  alt="Client Logo 2"
                  className="h-12 object-contain grayscale transition-all hover:grayscale-0"
                />
              </motion.div>
              <motion.div variants={fadeIn}>
                <Image
                  src="/placeholder.svg?height=60&width=120"
                  width={120}
                  height={60}
                  alt="Client Logo 3"
                  className="h-12 object-contain grayscale transition-all hover:grayscale-0"
                />
              </motion.div>
              <motion.div variants={fadeIn}>
                <Image
                  src="/placeholder.svg?height=60&width=120"
                  width={120}
                  height={60}
                  alt="Client Logo 4"
                  className="h-12 object-contain grayscale transition-all hover:grayscale-0"
                />
              </motion.div>
              <motion.div variants={fadeIn}>
                <Image
                  src="/placeholder.svg?height=60&width=120"
                  width={120}
                  height={60}
                  alt="Client Logo 5"
                  className="h-12 object-contain grayscale transition-all hover:grayscale-0"
                />
              </motion.div>
            </motion.div> */}
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-blue-950 text-white">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-900 px-3 py-1 text-sm text-blue-100">Contact Us</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get In Touch</h2>
                <p className="max-w-[900px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have a question or want to discuss your project? Reach out to us and we'll get back to you as soon as
                  possible.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="mx-auto grid max-w-6xl gap-12 py-12 lg:grid-cols-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div className="flex flex-col gap-6" variants={fadeIn}>
                <div className="grid gap-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-blue-300" />
                    <p className="text-lg">Pothuhera, Sri Lanka</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-blue-300" />
                    <p className="text-lg">+94 75 040 0585</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-blue-300" />
                    <p className="text-lg">team@niolla.lk</p>
                  </div>
                </div>
                <div className="h-[400px] w-full overflow-hidden rounded-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31649.81963418036!2d80.32!3d7.57!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3398ab09a8c97%3A0x1f90e4e71e5b40f3!2sPothuhera%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Niolla Office Location"
                  ></iframe>
                </div>
              </motion.div>
              <motion.div className="grid gap-6" variants={fadeIn}>
                <form className="grid gap-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid gap-2">
                    <label htmlFor="name" className="text-sm font-medium leading-none">
                      Name
                    </label>
                    <input
                      id="name"
                      className="h-10 rounded-md border border-blue-800 bg-blue-900 px-3 py-2 text-sm placeholder:text-blue-400"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="email" className="text-sm font-medium leading-none">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="h-10 rounded-md border border-blue-800 bg-blue-900 px-3 py-2 text-sm placeholder:text-blue-400"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="subject" className="text-sm font-medium leading-none">
                      Subject
                    </label>
                    <input
                      id="subject"
                      className="h-10 rounded-md border border-blue-800 bg-blue-900 px-3 py-2 text-sm placeholder:text-blue-400"
                      placeholder="Enter subject"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="message" className="text-sm font-medium leading-none">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="min-h-[150px] rounded-md border border-blue-800 bg-blue-900 px-3 py-2 text-sm placeholder:text-blue-400"
                      placeholder="Enter your message"
                    ></textarea>
                  </div>
                  <Button className="bg-blue-500 hover:bg-blue-600 text-white">Send Message</Button>
                </form>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-gray-900 text-white py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Niolla</h3>
              <p className="text-sm text-gray-400">Empowering businesses with smart IT solutions since 2023.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#home" className="hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-white">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#portfolio" className="hover:text-white">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Services</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#services" className="hover:text-white">
                    POS Systems
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-white">
                    Business Automation
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-white">
                    Website Development
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-white">
                    Custom Software
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Contact</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Pothuhera, Sri Lanka</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>+94 75 040 0585</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>team@niolla.lk</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Niolla. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

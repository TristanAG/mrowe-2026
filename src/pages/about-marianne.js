import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { StaticImage } from "gatsby-plugin-image"


const AboutMarianne = () => (
  <Layout>
    <Seo title="About Marianne" />

    <h1>About Marianne</h1>

<center>
  <p>
    <i>
      “How we are in relationship with ourselves directly affects
      <br />
      how we are in relationship with other beings and the world.
      <br />
      Through presence, curiosity, kindness and compassion
      <br />
      we cultivate connections that are healing and transformative.
      <br />
      In this way, we are part of a profound evolution
      <br />
      that serves consciousness and all beings.
      <br />
      AND we find we enjoy life and each other much, much more.”
      <br />
    </i>
    – Marianne Rowe

  </p>

  <center>
    <StaticImage
      src="../images/marianne-new.png"
      alt="Marianne Photo"
      style={{ maxWidth: `100%` }}
    />
  </center>

  <br />

  <p>
    Marianne Rowe, MS, LMFT is a psychotherapist, meditation teacher, nature therapy guide, relational facilitator, and artist. In her work and personal life, she is dedicated to enhancing mindful awareness and compassionate connection with oneself, with others and the world.
    Marianne established her psychotherapy practice in Pacific Grove in 1986. Since that time she has been working with children, adolescents, and adults, in individual, couples, and family therapy. Her focus is on facilitating healing, integration and transformation. Her therapeutic approach is sourced in her training in transpersonal psychology, cognitive behavioral therapy, gestalt therapy, family systems, ecotherapy, and integral theory. In her work with clients, she brings attention to the psychological, emotional, physical, and spiritual aspects of life as pathways for cultivating well-being, connection and compassion.

  </p>

  <p>
    In the 1990’s, Marianne began her study and practice of meditation. Her teachers included His Holiness the 14th Dalai Lama, Jack Kornfield, Adyashanti, and Pema Chodron. In 2007, she founded the Mindful Education Project and has been teaching mindfulness to children, youth and adults ever since. She has taught the mindfulness curriculum she developed for students and teachers in elementary and high schools, at California State University of Monterey Bay, and at Middlebury Institute for International Studies in Monterey.
    Since 2011, Marianne began her training in Interpersonal Meditation with Authentic World in San Francisco. The practices and principals of this work foster understanding, compassion and connection in all aspects of life. She has served as a facilitator for these trainings and intensives in San Francisco, CA, and at the Integral Center in Boulder, CO. Marianne also teaches courses in mindful relating and facilitates trainings and retreats in cultivating authentic connection in schools, healthcare organizations and businesses.
  </p>

  <p>

  In 2016, Marianne co-founded <a href="http://montereybaymeditation.com">Monterey Bay Meditation Studio</a>, a culmination of a long-time dream of offering a space for cultivating awareness and community. Here, she develops and teaches courses, facilitates retreats, and offers consultation in developing mindful awareness and compassionate connection in personal and professional life. Her retreats engage meditation, creativity, and nature as conduits for connecting with self and the world.
  </p>
  <p>
    Marianne was certified in 2018 as a Nature and Forest Therapy Guide by the Association for Nature and Forest Therapy. Since that time, she has been leading Forest Bathing sessions and numerous other outdoor healing and meditation practices. She created and continues teaching  a 9-month online course, “Being Outdoors: Sensing the Sacred,” that focuses on cultivating a relationship of reverence and reciprocity with Earth and all beings.

  </p>



    {/* <img src="../images/waves.jpg" style="max-width: 100%" /> */}

    <StaticImage
      src="../images/waves.jpg"
      alt="sitting in the waves"
      style={{ maxWidth: `100%` }}
    />
    <p>
      <i>
        &quot;Being fully present is an essential part of engaging with life,
        <br />
        deepening relationships, receiving nature’s teachings,
        <br />
        and enhancing the creative process.
        <br />
        Relaxing the mind and opening the heart leads to profound engagement
        <br />
        with oneself, others and the environment.
        <br />
        From this field, fearless expression, deep wisdom,
        <br />
        and new ideas emerge and evolve.”
        <br />
      </i>
      – Marianne Rowe
    </p>
  </center>

  <p>
    Marianne’s therapeutic work and teaching in healing, transformation and evolution incorporates

    developing consciousness of the physiological/neurological, cognitive, emotional, relational and

    spiritual aspects of being.
  </p>


  </Layout>
)

export default AboutMarianne

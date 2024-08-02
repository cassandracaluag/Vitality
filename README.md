# Vitality
## An app that seeks to address and improve the mental + physical health and wellness of first-gen, low-income students.

## Inspiration
Many first-gen, low-income students face significant challenges in maintaining their mental and physical health due to the stresses of their environment. My app, Vitality, aims to support these students by providing comprehensive resources and personalized AI-powered guidance to help them achieve a balanced and healthy lifestyle.

## What it does
Vitality has three main features - Resilience Reminders, Journaling Prompts, and FitBot (A Health and Wellness Chatbot). Resilience Reminders allows the user to gain motivation, insight, and advice from other FGLI scholars, ensuring that they never feel alone, and that there are others who are going through the same process as them. The journaling feature offers an introspective way to learn more about oneself and set goals, with evidence showing that writing out emotions and thoughts significantly improves mental health. FitBot is an AI-powered chatbot that answers any health and wellness questions users may have, and can also serve as a friend when needed.

## How I built it
My project has two main components: the main app and FitBot. The main app was built using Code.org's App Lab, incorporating (an unconventional form of) JavaScript, HTML, and CSS. I created Data Tables (databases on Code.org) to store user logins, journal prompt entries, and Resilience Reminders. This allows the user to have their own account, and store information that only belongs to them. FitBot, on the other hand, was developed in Visual Studio Code, using HTML and CSS for the frontend, and Python with Flask for the backend. Despite being developed separately, FitBot is still linked within the main app, and is an integral part of the main app. For the deployment of FitBot, I used Vercel. In the beginning of this project, I knew I wanted to integrate AI, as it is a really fascinating feature that can provide more personalized support and enhance the user's experience. I did this using OpenAI's API, and integrating it into the Python + Flask backend. The visuals within my Code.org app were created in Canva.

## Challenges I ran into
Prior to this, I had never worked with HTML, CSS, Github, or Vercel, so there were a lot of things I needed to figure out within the given timeframe. I wanted to work with OpenAI's API to build FitBot, but I had never done so before, so I had to quickly learn how to integrate it into my project. This required knowing how to send queries to APIs, receive responses, handle them, and make sure the data was processed properly. Because I was unfamiliar with using Flask and HTML/CSS, I had difficulty connecting my frontend to my backend. With that being said, I still couldn't format the response string from the OpenAI API. Additionally, I was completely new to Github, so I had difficulty initially committing my code, and working with its features. Vercel was also an unfamiliar environment for me, so when I attempted to deploy FitBot on Vercel, I kept getting 404 errors. I also didn't know that there were files ('requirements.txt' and 'vercel.json') that had to be added to the root in order for FitBot to work on Vercel, contributing to more challenges. Lastly, due to security restrictions on Code.org, I was unable to utilize 'get' requests from the App Lab API directly to FitBot. As a result, I had to use a button on Vercel to redirect the user from Vercel (FitBot) to Code.org (Home/Main App), and another button on Code.org to redirect the user from Code.org to Vercel.

## Accomplishments that I'm proud of
Given that this is my very first hackathon, I am proud of myself for going outside of my comfort zone and actually creating something that has the potential to make an impact. Even with many other endeavors taking place during this hackathon, I was still able to complete a rudimentary version of Vitality. 

## What I learned
This hackathon was an invaluable learning experience, as I got to learn more about basic HTML/CSS, Flask, APIs, and Github. Software is already redefining the way we perceive the world, solving issues that have been pressing society for a long time, and I am glad that I got the opportunity to explore that. 

## What's next for Vitality
In the long run, I plan to code the main app (from Code.org) into a more widely recognized IDE, such as VSCode. With that, I will plan on making FitBot accessible right from the main app, from which both components are on the same platform. I will also focus on adequately formatting the strings to enhance readability.

## Setup and Execution Instructions
### If you want to access full application:
- Open [Vitality](https://studio.code.org/projects/applab/ljZPuAhwnTlv6uABOYfYiQgTaAGgSZdRAciUTpOX3s8).
### If you only want to access FitBot:
- Open [FitBot from Vitality](https://vitality-fitbot.vercel.app/).
  
## Step-by-Step Guide
- Open [Vitality](https://studio.code.org/projects/applab/ljZPuAhwnTlv6uABOYfYiQgTaAGgSZdRAciUTpOX3s8).
### For New Users:
- Press 'Sign Up' and input a username, password, and your first name.
- Press 'Sign Up' button
- If account already exists, follow directions on the red button.
### For Returning Users:
- Press 'Login' and input your username and password.
- Press 'Login' button.
- If a red button emerges, you don't have an account yet - make one by pressing the red button.
- You should now be on the menu. The menu displays three buttons - the core features of Vitality. Press on the one that you would like to access.
### Resilience Reminders:
- Press the left (back) and right (forward) buttons to scroll through each of the Resilience Reminders.
- If you want to share your own insight, press the button that says 'Click Here to Share your Insight!'
- Once pressed, fill out the fields. Remember to be respectful and kind, and not to share any sensitive information. If you would not like others to know your generalized location, input 'Location' for that given field.
- Once filled out, press the 'Share' button.
- You can share as many messages as you'd like.
- Once done, you can click the 'Back' button, redirecting you to the page displaying all Resilience Reminders.
- Click 'Back to Menu' once done with Resilience Reminders, and want to access other Vitality features.
### Journaling:
- Press the left (back) and right (forward) buttons to scroll through each of the journaling prompts.
- Once you've found a prompt you'd like to write about, press 'Choose this Prompt'
- Fill out the given field under 'Write your response.' Again, don't share sensitive information.
- Once done, press 'Share.'
- You are now back in the Journaling main page.
- If you want to see your past entries, click 'See your Past Entries'
- Press the left (back) and right (forward) buttons to scroll through each of your journaling prompts.
- Click 'Back' when satisfied.
- Click 'Back to Menu' once done with Journaling, and want to access other Vitality features.
### FitBot (Health & Wellness Chatbot):
- Code.org is displaying an alert - you are about to leave to go to FitBot's deployed website.
- Click 'Continue'
- Press on the field that says 'Ask FitBot about health and wellness here!' and input whatever you want to say to FitBot.
- Press 'Ask FitBot!'
- Because the AI taking time to generate a response, it will likely take a while, according to how complex your input is.
- The output to your question will be in the big white box under 'FitBot says...'
- Once done with FitBot, click 'Go Back to Vitality,' where you will be redirected to the Vitality login.

## Contribution Guidelines
### Adheres to MIT License


  

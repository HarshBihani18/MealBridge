#  MealBridge

> A MERN Stack Food Donation Platform that connects food donors with NGOs and receivers to reduce food waste and support communities.

# 📖 Overview

MealBridge is a web-based platform designed to reduce food waste by connecting food donors with NGOs and food receivers.

Every day, large amounts of edible food are discarded while many people continue to struggle with hunger and food insecurity. MealBridge provides a simple and efficient way to redistribute surplus food to those who need it.

The platform supports **United Nations Sustainable Development Goal (SDG) 12: Responsible Consumption and Production** by encouraging responsible food redistribution and reducing unnecessary waste.

---

# 🌍 Problem Statement

Food waste is a major global challenge.

Restaurants, hotels, event organizers, hostels, and households often have surplus food that goes unused and is eventually discarded.

At the same time:

* Millions of people face food insecurity.
* NGOs struggle to source food efficiently.
* Valuable resources such as water, energy, and labor are wasted.

Without proper redistribution systems, edible food ends up in landfills, contributing to environmental pollution and greenhouse gas emissions.

---

# 💡 Solution

MealBridge acts as a bridge between food donors and food receivers.

The platform enables:

1. Donors to add surplus food donations.
2. NGOs and receivers to browse available donations.
3. Receivers to request food directly.
4. Donors to track donation requests.
5. Communities to benefit from food that would otherwise be wasted.

---

# ✨ Features

## 🔐 User Authentication

* User Registration
* User Login
* Secure password storage using bcrypt.js

---

## 👥 Role-Based Access

Two user roles are supported:

### Donor

* Add food donations
* View donation requests
* Track donation status

### Receiver

* Browse available donations
* Request food
* Track requested donations

---

## 🍱 Food Donation Management

Users can add:

* Food Name
* Quantity
* Location
* Expiry Time
* Donor Information

All donations are stored in MongoDB.

---

## 🤝 Food Request System

Receivers can request available food donations.

The platform automatically updates:

* Requested By
* Request Status

---

## 📊 Donor Dashboard

Donors can view:

* Total Donations
* Available Donations
* Requested Donations

---

## 📈 Receiver Dashboard

Receivers can view:

* Requested Donations
* Donation Details
* Request Status

---

## 🌱 Sustainable Development Goal Support

MealBridge directly contributes to:

### SDG 12 – Responsible Consumption and Production

By reducing food waste and improving food redistribution.

---

# 🛠 Technology Stack

## Frontend

* React.js
* Vite
* Tailwind CSS
* Axios
* React Router DOM

## Backend

* Node.js
* Express.js

## Database

* MongoDB Atlas
* Mongoose

## Authentication

* bcrypt.js

## Development Tools

* Git
* GitHub
* Postman
* VS Code

---



# 🚀 Usage

### Register as a User

Choose either:

* Donor
* Receiver

### Login

Access your dashboard according to your role.

### Donate Food

Submit food details including:

* Food Name
* Quantity
* Location
* Expiry Time

### Request Food

Browse available donations and request food directly from the platform.

---


# 🎯 Future Enhancements

* Expiry-Based Food Prioritization
* Live Countdown Timers
* Food Rescue Score
* Real-Time Impact Counter
* NGO Verification
* Location-Based Matching
* Notification System

---

# 🌍 SDG Contribution

MealBridge contributes to:

### SDG 12: Responsible Consumption and Production

The platform promotes sustainable food redistribution by ensuring surplus food reaches people who need it instead of being wasted.

---

# 👨‍💻 Author

**Harsh**

B.Tech – Electronics and Communication Engineering (ECE)

Developed as a MERN Stack project focused on reducing food waste and supporting sustainable communities.

---

# ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.

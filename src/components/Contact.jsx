import React from 'react'

const Contact = () => {
  return (
  <section id="contact" class="py-5 bg-light">
    <div class="container">
      <h2 class="section-title">Get in Touch</h2>
      <div class="row justify-content-center g-5">
     
        <div class="col-lg-6">
          <form class="contact-form shadow p-4 rounded-3 bg-white">
            <div class="mb-3">
              <label class="form-label">Your Name</label>
              <input type="text" class="form-control" required  />
            </div>
            <div class="mb-3">
              <label class="form-label">Your Email</label>
              <input type="email" class="form-control" required />
            </div>
            <div class="mb-3">
              <label class="form-label">Your Message</label>
              <textarea class="form-control" rows="5" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary w-100">Send Message</button>
          </form>
        </div>
  
        <div class="col-lg-6 text-center text-md-start">
          <div class="contact-info p-4">
            <h3 class="mb-4">Direct Contact</h3>
            <div class="d-flex align-items-center mb-3">
              <i class="fas fa-phone me-3 fs-4 text-primary"></i>
              <div>
                <h5 class="mb-0">Phone</h5>
                <a href="tel:+1234567890" class="text-decoration-none">+94756648014</a>
              </div>
            </div>
            <div class="d-flex align-items-center">
              <i class="fas fa-envelope me-3 fs-4 text-primary"></i>
              <div>
                <h5 class="mb-0">Email</h5>
                <a href="mailto:your.email@example.com" class="text-decoration-none">aman.raheem041@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Contact
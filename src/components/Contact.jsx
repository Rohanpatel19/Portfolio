export default function Contact() {
    return (
        <section id="contact" className="container contact-section">
            <h2 className="section-title">
                What's Next?
            </h2>
            <div className="contact-content glass">
                <h3>Get In Touch</h3>
                <p>
                    I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
                </p>
                <div className="social-links" style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginBottom: '2rem' }}>
                    <a href="https://github.com/Rohanpatel19" target="_blank" rel="noopener noreferrer" className="text-gradient" style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>GitHub</a>
                    <a href="https://www.linkedin.com/in/rohan-patel-6706002ab" target="_blank" rel="noopener noreferrer" className="text-gradient" style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>LinkedIn</a>
                    <a href="https://leetcode.com/u/mr_R_patel/" target="_blank" rel="noopener noreferrer" className="text-gradient" style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>LeetCode</a>
                </div>
                <a href="mailto:2005rohan19rop@gmail.com" className="btn btn-primary contact-btn">
                    Send an Email
                </a>
            </div>
        </section>
    );
}

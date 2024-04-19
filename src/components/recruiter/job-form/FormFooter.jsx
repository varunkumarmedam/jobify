export default function FormFooter({ showPrev, isFinal, handleBack, previewJob }) {
    return <div className="form-footer">
        <div>
            <h6>Design System - UX</h6>
            <div className="footer-details">Job in Bnglore</div>
        </div>
        <div>
            {showPrev && <button type="button" onClick={handleBack} className="btn btn-light mr-2">Prev</button>}
            {!isFinal && <button type="submit" className="btn btn-primary">Next</button>}
            {isFinal && <button type="button" onClick={previewJob} className="btn btn-success">Preview and Publish Job</button>}
        </div>
    </div>
}

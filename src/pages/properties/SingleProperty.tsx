/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { propertiesArray } from ".";

const RowWrap = styled.div`
    @media screen and (max-width: 576px) {
        margin-bottom: 10px;
    }
`;

const ProductName = styled.h2`
    @media screen and (max-width: 576px) {
        text-transform: capitalize;
    }
`;

const Img = styled.img`
    height: 430px;
    object-fit: cover;

    @media screen and (max-width: 768px) {
        height: 400px;
    }

    @media screen and (max-width: 576px) {
        height: 300px;
    }
`;

const Row = ({ title, value }: { title: string; value: string }) => (
    <RowWrap className="col-md-3 col-6 mb-15">
        <h5>{title}</h5>
        <h6>{value}</h6>
    </RowWrap>
);

type CommentProps = {
    handleSubmit: (e: React.SyntheticEvent) => void;
    state: {
        fullName: string;
        email: string;
        message: string;
    };
    onChange: (e: React.ChangeEvent<any>) => void;
};

const CommentSection = ({ handleSubmit, state, onChange }: CommentProps) => (
    <div className="eyahomes-comment-section">
        <div className="row">
            <div className="col-12">
                <h3>Leave a Reply</h3>
                <form onSubmit={handleSubmit} className="row">
                    <div className="col-md-6">
                        <input
                            type="text"
                            name="fullName"
                            value={state.fullName}
                            placeholder="Full Name *"
                        />
                    </div>
                    <div className="col-md-6">
                        <input
                            type="email"
                            name="email"
                            value={state.email}
                            placeholder="Email Address *"
                            onChange={onChange}
                        />
                    </div>
                    <div className="col-md-12">
                        <textarea
                            name="message"
                            id="message"
                            cols={40}
                            value={state.message}
                            rows={4}
                            placeholder="Your Comment *"
                            onChange={onChange}
                        />
                    </div>
                    <div className="col-md-12 mt-3">
                        <input type="submit" name="submit" value="Leave a reply" />
                    </div>
                </form>
            </div>
        </div>
    </div>
);

const SingleProperty = () => {
    const { id } = useParams();
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<any>) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();

        console.log(formData);
    };

    const currentProperty = propertiesArray.find(
        property => property.idx.toString() === id
    );

    return (
        <section className="project-page section-padding2">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="portfolio-item">
                            <Img
                                className="img-fluid"
                                src={currentProperty?.img}
                                alt=""
                            />
                        </div>
                        <div className="row">
                            <div className="col-md-7 offset-md-5">
                                <div className="project-bar">
                                    <div className="row justify-content-between align-items-center text-left text-lg-start">
                                        <Row title="Type of property" value="Land" />
                                        <Row
                                            title="Property details"
                                            value="12 hectares"
                                        />
                                        <Row title="Category" value="Rent" />
                                        <Row title="Location" value="Abuja" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <ProductName className="mt-30 section-title2">
                            {currentProperty?.title.toLowerCase()}
                        </ProductName>
                        <p className="mb-30">{currentProperty?.price}</p>
                        {/* Loop features here */}
                        <ul className="list-unstyled page-list mb-30">
                            <li>
                                <div className="page-list-icon">
                                    <span className="ti-check" />
                                </div>
                                <div className="page-list-text">
                                    <p>Over 15 years of experience</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <CommentSection
                    onChange={handleChange}
                    handleSubmit={handleSubmit}
                    state={formData}
                />
            </div>
        </section>
    );
};

export default SingleProperty;

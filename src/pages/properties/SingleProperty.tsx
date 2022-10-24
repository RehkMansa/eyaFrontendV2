/* eslint-disable @typescript-eslint/no-explicit-any */
import { validateAll } from "indicative/validator";
import React, { useContext, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { BiCheckDouble } from "react-icons/bi";
import { Input, TextArea } from "../../components/elements/Inputs";
import { addDocument } from "../../firebase/methods";
import { CommentType } from "../../types/comments.type";
import { COMMENTS } from "../../constants";
import AppContext from "../../context/AppContext";
import PreLoader, { FullPageSpinner } from "../../components/elements/PreLoader";

const RowWrap = styled.div`
    @media screen and (max-width: 576px) {
        margin-bottom: 20px;
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

const NotificationWrapper = styled.div`
    position: relative;

    .close-icon {
        position: absolute;
        top: 5px;
        font-size: 18px;
        right: 25px;
        cursor: pointer;
    }

    p {
        text-transform: lowercase;
        margin-bottom: 0;
    }
    p:first-letter {
        text-transform: capitalize;
    }
`;

const FeaturesLi = styled.li`
    .page-list-icon span {
        border: none;
        padding: 0;
    }
    span svg {
        font-size: 22px;
    }
`;

const Blockquote = styled.blockquote`
    &:before {
        display: none;
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
    error: { [x: string]: string };
};

const CommentSection = ({ handleSubmit, state, onChange, error }: CommentProps) => (
    <div className="eyahomes-comment-section">
        <div className="row">
            <div className="col-12">
                <h3>Leave a Reply</h3>
                <form onSubmit={handleSubmit} className="row">
                    <div className="col-md-6">
                        <Input
                            type="text"
                            name="fullName"
                            onChange={onChange}
                            value={state.fullName}
                            placeholder="Full Name *"
                            error={error.fullName}
                        />
                    </div>
                    <div className="col-md-6">
                        <Input
                            type="email"
                            name="email"
                            value={state.email}
                            placeholder="Email Address *"
                            onChange={onChange}
                            error={error.email}
                        />
                    </div>
                    <div className="col-md-12">
                        <TextArea
                            name="message"
                            value={state.message}
                            placeholder="Your Comment *"
                            onChange={onChange}
                            error={error.message}
                            type=""
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
    const { properties } = useContext(AppContext);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        message: "",
    });
    const [error, setError] = useState<{ [x: string]: string }>({});
    const [notification, setNotification] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<any>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const uploadComment = async () => {
        setLoading(true);
        const payload: CommentType = {
            ...formData,
            approved: "pending",
            propertyId: id as string,
        };
        try {
            await addDocument(COMMENTS, payload);
            setNotification("Your comment is pending approval");
        } catch (err) {
            setNotification(err as string);
        }
        setLoading(false);
    };

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();

        const rules = {
            fullName: "required|min:3",
            email: "required|email",
            message: "required|min:10",
        };
        const message = {
            "fullName.required": "Please enter your name",
            "fullName.min": "Name is too short",
            "email.required": "Please enter your email address",
            "email.email": "Email is not of a valid format",
            "message.required": "Please enter a short message",
            "message.min": "Message should be above 5 letters",
        };

        validateAll(formData, rules, message)
            .then(() => {
                uploadComment();
                setError({});
            })
            .catch(errors => {
                const formattedErr: { [x: string]: string } = {};

                errors.forEach((err: any) => {
                    formattedErr[err.field] = err.message;
                });

                setError(formattedErr);
            });
    };

    const currentProperty: any = useMemo(
        () => properties.find((property: any) => property.id.toString() === id),
        [properties, id]
    );

    if (!currentProperty) {
        return <PreLoader />;
    }

    return (
        <section className="project-page section-padding2">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="portfolio-item">
                            <Img
                                className="img-fluid"
                                src={currentProperty.images[0]}
                                alt=""
                            />
                        </div>
                        <div className="row">
                            <div className="col-md-7 offset-md-5">
                                <div className="project-bar">
                                    <div className="row justify-content-between align-items-center text-left text-lg-start">
                                        <Row title="Realtor" value="Eya homes" />
                                        <Row
                                            title="Price"
                                            value={`₦ ${currentProperty?.price}`}
                                        />
                                        <Row title="Category" value="Rent" />
                                        <Row
                                            title="Location"
                                            value={currentProperty?.location}
                                        />
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
                        <Blockquote>
                            <h2>Description</h2>
                            {currentProperty?.description}
                        </Blockquote>
                        <ul className="list-unstyled page-list mb-30">
                            {currentProperty.features.map((item: any) => (
                                <FeaturesLi key={item.title}>
                                    <div className="page-list-icon">
                                        <span className="ti">
                                            <BiCheckDouble />
                                        </span>
                                    </div>
                                    <div className="page-list-text">
                                        <p>
                                            {item.title}: {item.value}
                                        </p>
                                    </div>
                                </FeaturesLi>
                            ))}
                        </ul>
                    </div>
                </div>
                {notification && (
                    <NotificationWrapper className="row">
                        <div className="col-md-6">
                            <div
                                className="alert alert-success contact__msg"
                                role="alert"
                            >
                                <p>{notification}</p>
                            </div>
                            <div
                                role="button"
                                onClick={() => setNotification("")}
                                className="close-icon"
                            >
                                <MdClose />
                            </div>
                        </div>
                    </NotificationWrapper>
                )}
                <CommentSection
                    onChange={handleChange}
                    handleSubmit={handleSubmit}
                    state={formData}
                    error={error}
                />
            </div>
            {loading && <FullPageSpinner />}
        </section>
    );
};

export default SingleProperty;

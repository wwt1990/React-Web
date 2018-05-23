import React, { Component } from 'react';
import Media from "react-media";

class Other extends Component {
  render() {
    return (
      <div className='container'>
        <Media query="(max-width: 768px)">
          {matches =>
            matches ? (
              <h1 style={{fontSize:'25px',padding:'20px 20px 10px'}}>Other Projects</h1>
            ) : (
              <h1 style={{padding:'20px 20px 10px'}}>Other Projects</h1>
            )
          }
        </Media>

        <div style={{textIndent:'20px', marginLeft: '30px'}}>
          <p>In addition to web developer, I am a data scientist as well. Here are some of my machine learning and deep learning projects
             I did during the past years. Feel free to check them out!
          </p>
        </div>

        <Media query="(max-width: 768px)">
          {matches =>
            matches ? (
              <div className='container-fluid table-responsive'>
                <table className="table table-hover table-light" style={{boxShadow:'4px 4px #888888,6px 6px #49c4ed'}}>
                  <thead>
                    <tr className='bg-info'>
                      <th className='text-center' scope="col">#</th>
                      <th className='text-center' scope="col">Project Name</th>
                      <th className='text-center' scope="col">Detail</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Digit Recognizer (MNIST)</td>
                      <td style={{verticalAlign:'middle',textAlign:'center'}}>
                        <button style={{cursor:'pointer'}} type="button" className="btn btn-info" data-toggle="modal" data-target="#project1">
                          View detail
                        </button>
                        <div className="modal fade" id="project1" tabIndex="-1" role="dialog" aria-labelledby="project1Title" aria-hidden="true">
                          <div className="modal-dialog" role="document">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5 className="modal-title" id="project1Title">Digit Recognizer (MNIST)</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                  <span aria-hidden="true">&times;</span>
                                </button>
                              </div>
                              <div className="text-left modal-body">
                              <h6><span className='font-weight-bold font-italic'>Goal:&nbsp;</span>&nbsp;generate a classifier to predict the number to which a new image corresponds</h6>
                              <h6><span className='font-weight-bold font-italic'>Key words:</span></h6>
                                <ul>
                                  <li>Classification</li>
                                  <li>Linear SVM</li>
                                  <li>Non-linear SVM</li>
                                  <li>Convolutional Neural Network</li>
                                </ul>
                              <h6><span className='font-weight-bold font-italic'>Detail:</span></h6>
                                <ul>
                                  <li>Used Linear SVM and train-valid split method to train a dataset with 42000 samples and 785 features containing gray-scale images of hand-drawn digits, from zero through nine and generate a classifier to predict the number to which a new test image corresponds and achieved 91.105% accuracy on valid set</li>
                                  <li>Used non-linear SVM to train the data and achieved 98.043% accuracy on Kaggle Leaderboard</li>
                                  <li>Utilized Keras using TensorFlow backend to model a Convolutional Neural Network with one CNN layer and two FC layers to train the data and achieved 98.686% accuracy on Kaggle Leaderboard</li>
                                </ul>
                              <a href='https://github.com/wwt1990/MNIST' target='_blank' rel="noopener noreferrer">Link to GitHub</a>
                              </div>
                              <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Facial Keypoints Detection</td>
                      <td style={{verticalAlign:'middle',textAlign:'center'}}>
                        <button style={{cursor:'pointer'}} type="button" className="btn btn-info" data-toggle="modal" data-target="#project2">
                          View detail
                        </button>
                        <div className="modal fade" id="project2" tabIndex="-1" role="dialog" aria-labelledby="project2Title" aria-hidden="true">
                          <div className="modal-dialog" role="document">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5 className="modal-title" id="project2Title">Facial Keypoints Detection</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                  <span aria-hidden="true">&times;</span>
                                </button>
                              </div>
                              <div className="text-left modal-body">
                              <h6><span className='font-weight-bold font-italic'>Goal:&nbsp;</span>&nbsp;predict 15 key points on a new face</h6>
                              <h6><span className='font-weight-bold font-italic'>Key words:</span></h6>
                                <ul>
                                  <li>Prediction</li>
                                  <li>Lasagne</li>
                                  <li>Convolutional Neural Network</li>
                                  <li>Data Augmentation</li>
                                </ul>
                              <h6><span className='font-weight-bold font-italic'>Detail:</span></h6>
                                <ul>
                                  <li>Used Lasagne to train a dataset with 7059 samples and 31 features containing gray-scale images of a face and used one hidden FC layer to predict 15 key points on a new test face and achieved 2.698 Root MSE</li>
                                  <li>Added three CNN layers and two FC layers to the model and got less train loss and valid loss on the training data and achieved 1.899 RMSE</li>
                                  <li>Used data augmentation (applied flip on the images), changed learning rate and momentum, and applied early stopping and added more CNN layers to the model</li>
                                </ul>
                              <a href='https://github.com/wwt1990/Facial-Keypoints-Detection' target='_blank' rel="noopener noreferrer">Link to GitHub</a>
                              </div>
                              <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Faces Capture and Recognition from Videos</td>
                      <td style={{verticalAlign:'middle',textAlign:'center'}}>
                        <button style={{cursor:'pointer'}} type="button" className="btn btn-info" data-toggle="modal" data-target="#project3">
                          View detail
                        </button>
                        <div className="modal fade" id="project3" tabIndex="-1" role="dialog" aria-labelledby="project3Title" aria-hidden="true">
                          <div className="modal-dialog" role="document">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5 className="modal-title" id="project3Title">Faces Capture and Recognition from Videos</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                  <span aria-hidden="true">&times;</span>
                                </button>
                              </div>
                              <div className="text-left modal-body">
                              <h6><span className='font-weight-bold font-italic'>Goal:&nbsp;</span>&nbsp;generate a classifier to classify new faces</h6>
                              <h6><span className='font-weight-bold font-italic'>Key words:</span></h6>
                                <ul>
                                  <li>Classification</li>
                                  <li>Opencv</li>
                                  <li>Dlib</li>
                                  <li>TorchNeuralNet</li>
                                  <li>Openface</li>
                                </ul>
                              <h6><span className='font-weight-bold font-italic'>Detail:</span></h6>
                                <ul>
                                  <li>Captured all the faces from one video by using opencv</li>
                                  <li>Classified different people's faces into subfolders as training data</li>
                                  <li>Trained the data by using dlib, TorchNeuralNet and openface in Python and built a classifier to classify faces</li>
                                  <li>Tested the classifier on one new video and calculated the precision and recall and F-1 score</li>
                                </ul>
                              <a href='https://github.com/wwt1990/Face-Capture-From-Video' target='_blank' rel="noopener noreferrer">Link to GitHub</a>
                              </div>
                              <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td>Time Series Project</td>
                      <td style={{verticalAlign:'middle',textAlign:'center'}}>
                        <button style={{cursor:'pointer'}} type="button" className="btn btn-info" data-toggle="modal" data-target="#project4">
                          View detail
                        </button>
                        <div className="modal fade" id="project4" tabIndex="-1" role="dialog" aria-labelledby="project4Title" aria-hidden="true">
                          <div className="modal-dialog" role="document">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5 className="modal-title" id="project4Title">Time Series Project</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                  <span aria-hidden="true">&times;</span>
                                </button>
                              </div>
                              <div className="text-left modal-body">
                              <h6><span className='font-weight-bold font-italic'>Goal:&nbsp;</span>&nbsp;detect when housing bubble began and busted in 2008</h6>
                              <h6><span className='font-weight-bold font-italic'>Key words:</span></h6>
                                <ul>
                                  <li>Prediction</li>
                                  <li>Data Transformation</li>
                                  <li>ACF/PACF and Periodogram</li>
                                  <li>ARIMA Models</li>
                                </ul>
                              <h6><span className='font-weight-bold font-italic'>Detail:</span></h6>
                                <ul>
                                  <li>Transformed and differentiated data, plotted ACF/PACF and periodogram, fitted a variety of ARIMA models</li>
                                  <li>Checked AIC, diagnostics, cross validation of the models and chose the optimal one</li>
                                  <li>Forecasted and provided prediction intervals for the index values of the future values</li>
                                  <li>Detected when housing bubble began and busted</li>
                               </ul>
                              <a href='https://github.com/wwt1990/Time-Series' target='_blank' rel="noopener noreferrer">Link to GitHub</a>
                              </div>
                              <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <th scope="row">5</th>
                      <td>Survival Analysis on Screening Movie after 30 Days of Release</td>
                      <td style={{verticalAlign:'middle',textAlign:'center'}}>
                        <button style={{cursor:'pointer'}} type="button" className="btn btn-info" data-toggle="modal" data-target="#project5">
                          View detail
                        </button>
                        <div className="modal fade" id="project5" tabIndex="-1" role="dialog" aria-labelledby="project5Title" aria-hidden="true">
                          <div className="modal-dialog" role="document">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5 className="modal-title" id="project5Title">Survival Analysis Project</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                  <span aria-hidden="true">&times;</span>
                                </button>
                              </div>
                              <div className="text-left modal-body">
                              <h6><span className='font-weight-bold font-italic'>Goal:&nbsp;</span>&nbsp;found the main factors that influence movie gross</h6>
                              <h6><span className='font-weight-bold font-italic'>Key words:</span></h6>
                                <ul>
                                  <li>Data Collection</li>
                                  <li>Kaplan-Meier Estimator</li>
                                  <li>Log-rank and Weighted Log-rank Tests</li>
                                  <li>Cox Proportional-hazards Model</li>
                                  <li>Model Adequacy</li>
                                </ul>
                              <h6><span className='font-weight-bold font-italic'>Detail:</span></h6>
                                <ul>
                                  <li>Collected and sampled the on-screen movies of different genre from Oct 2012 to Oct 2013 by hand</li>
                                  <li>Performed Kaplan-Meier estimator, the log-rank and weighted log-rank tests</li>
                                  <li>Used Cox proportional-hazards model with time-independent covariates and residuals to access model adequacy</li>
                                  <li>Found the main factors that influence movie gross</li>
                                </ul>
                              <a href='https://github.com/wwt1990/Survival-Analysis' target='_blank' rel="noopener noreferrer">Link to GitHub</a>
                              </div>
                              <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ) : (
              <div className='container-fluid table-responsive'>
                <table className="table table-hover table-light" style={{boxShadow:'4px 4px #888888,6px 6px #49c4ed'}}>
                  <thead>
                    <tr className='bg-info'>
                      <th className='text-center' scope="col">#</th>
                      <th className='text-center' scope="col">Project Name</th>
                      <th className='text-center' scope="col">Key Words</th>
                      <th className='text-center' scope="col">Goal</th>
                      <th className='text-center' scope="col">Description</th>
                      <th className='text-center' scope="col">Link</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Digit Recognizer (MNIST)</td>
                      <td><ul>
                        <li>Classification</li>
                        <li>Linear SVM</li>
                        <li>Non-linear SVM</li>
                        <li>Convolutional Neural Network</li>
                      </ul></td>
                      <td>Generate a classifier to predict the number to which a new image corresponds</td>
                      <td style={{verticalAlign:'middle',textAlign:'center'}}>
                        <button style={{cursor:'pointer'}} type="button" className="btn btn-info" data-toggle="modal" data-target="#project1">
                          View detail
                        </button>
                        <div className="modal fade" id="project1" tabIndex="-1" role="dialog" aria-labelledby="project1Title" aria-hidden="true">
                          <div className="modal-dialog" role="document">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5 className="modal-title" id="project1Title">Digit Recognizer (MNIST)</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                  <span aria-hidden="true">&times;</span>
                                </button>
                              </div>
                              <div className="modal-body">
                                <ul style={{textAlign:'left'}}>
                                  <li>Used Linear SVM and train-valid split method to train a dataset with 42000 samples and 785 features containing gray-scale images of hand-drawn digits, from zero through nine and generate a classifier to predict the number to which a new test image corresponds and achieved 91.105% accuracy on valid set</li>
                                  <li>Used non-linear SVM to train the data and achieved 98.043% accuracy on Kaggle Leaderboard</li>
                                  <li>Utilized Keras using TensorFlow backend to model a Convolutional Neural Network with one CNN layer and two FC layers to train the data and achieved 98.686% accuracy on Kaggle Leaderboard</li>
                                </ul>
                              </div>
                              <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td style={{verticalAlign:'middle',textAlign:'center'}}><a href='https://github.com/wwt1990/MNIST' target='_blank' rel="noopener noreferrer">GitHub</a></td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Facial Keypoints Detection</td>
                      <td><ul>
                        <li>Prediction</li>
                        <li>Lasagne</li>
                        <li>Convolutional Neural Network</li>
                        <li>Data Augmentation</li>
                      </ul></td>
                      <td>Predict 15 key points on a new face</td>
                      <td style={{verticalAlign:'middle',textAlign:'center'}}>
                        <button style={{cursor:'pointer'}} type="button" className="btn btn-info" data-toggle="modal" data-target="#project2">
                          View detail
                        </button>
                        <div className="modal fade" id="project2" tabIndex="-1" role="dialog" aria-labelledby="project2Title" aria-hidden="true">
                          <div className="modal-dialog" role="document">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5 className="modal-title" id="project2Title">Facial Keypoints Detection</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                  <span aria-hidden="true">&times;</span>
                                </button>
                              </div>
                              <div className="modal-body">
                                <ul style={{textAlign:'left'}}>
                                  <li>Used Lasagne to train a dataset with 7059 samples and 31 features containing gray-scale images of a face and used one hidden FC layer to predict 15 key points on a new test face and achieved 2.698 Root MSE</li>
                                  <li>Added three CNN layers and two FC layers to the model and got less train loss and valid loss on the training data and achieved 1.899 RMSE</li>
                                  <li>Used data augmentation (applied flip on the images), changed learning rate and momentum, and applied early stopping and added more CNN layers to the model</li>
                                </ul>
                              </div>
                              <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td style={{verticalAlign:'middle',textAlign:'center'}}><a href='https://github.com/wwt1990/Facial-Keypoints-Detection' target='_blank' rel="noopener noreferrer">GitHub</a></td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Faces Capture and Recognition from Videos</td>
                      <td><ul>
                        <li>Classification</li>
                        <li>Opencv</li>
                        <li>Dlib</li>
                        <li>TorchNeuralNet</li>
                        <li>Openface</li>
                      </ul></td>
                      <td>Generate a classifier to classify new faces</td>
                      <td style={{verticalAlign:'middle',textAlign:'center'}}>
                        <button style={{cursor:'pointer'}} type="button" className="btn btn-info" data-toggle="modal" data-target="#project3">
                          View detail
                        </button>
                        <div className="modal fade" id="project3" tabIndex="-1" role="dialog" aria-labelledby="project3Title" aria-hidden="true">
                          <div className="modal-dialog" role="document">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5 className="modal-title" id="project3Title">Faces Capture and Recognition from Videos</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                  <span aria-hidden="true">&times;</span>
                                </button>
                              </div>
                              <div className="modal-body">
                                <ul style={{textAlign:'left'}}>
                                  <li>Captured all the faces from one video by using opencv</li>
                                  <li>Classified different people's faces into subfolders as training data</li>
                                  <li>Trained the data by using dlib, TorchNeuralNet and openface in Python and built a classifier to classify faces</li>
                                  <li>Tested the classifier on one new video and calculated the precision and recall and F-1 score</li>
                                </ul>
                              </div>
                              <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td style={{verticalAlign:'middle',textAlign:'center'}}><a href='https://github.com/wwt1990/Face-Capture-From-Video' target='_blank' rel="noopener noreferrer">GitHub</a></td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td>Time Series Project</td>
                      <td><ul>
                        <li>Prediction</li>
                        <li>Data Transformation</li>
                        <li>ACF/PACF and Periodogram</li>
                        <li>ARIMA Models</li>
                      </ul></td>
                      <td>Detect when housing bubble began and busted in 2008</td>
                      <td style={{verticalAlign:'middle',textAlign:'center'}}>
                        <button style={{cursor:'pointer'}} type="button" className="btn btn-info" data-toggle="modal" data-target="#project4">
                          View detail
                        </button>
                        <div className="modal fade" id="project4" tabIndex="-1" role="dialog" aria-labelledby="project4Title" aria-hidden="true">
                          <div className="modal-dialog" role="document">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5 className="modal-title" id="project4Title">Time Series Project</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                  <span aria-hidden="true">&times;</span>
                                </button>
                              </div>
                              <div className="modal-body">
                                <ul style={{textAlign:'left'}}>
                                  <li>Transformed and differentiated data, plotted ACF/PACF and periodogram, fitted a variety of ARIMA models</li>
                                  <li>Checked AIC, diagnostics, cross validation of the models and chose the optimal one</li>
                                  <li>Forecasted and provided prediction intervals for the index values of the future values</li>
                                  <li>Detected when housing bubble began and busted</li>
                                </ul>
                              </div>
                              <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td style={{verticalAlign:'middle',textAlign:'center'}}><a href='https://github.com/wwt1990/Time-Series' target='_blank' rel="noopener noreferrer">GitHub</a></td>
                    </tr>
                    <tr>
                      <th scope="row">5</th>
                      <td>Survival Analysis on Screening Movie after 30 Days of Release</td>
                      <td><ul>
                        <li>Data Collection</li>
                        <li>Kaplan-Meier Estimator</li>
                        <li>Log-rank and Weighted Log-rank Tests</li>
                        <li>Cox Proportional-hazards Model</li>
                        <li>Model Adequacy</li>
                      </ul></td>
                      <td>Found the main factors that influence movie gross</td>
                      <td style={{verticalAlign:'middle',textAlign:'center'}}>
                        <button style={{cursor:'pointer'}} type="button" className="btn btn-info" data-toggle="modal" data-target="#project5">
                          View detail
                        </button>
                        <div className="modal fade" id="project5" tabIndex="-1" role="dialog" aria-labelledby="project5Title" aria-hidden="true">
                          <div className="modal-dialog" role="document">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5 className="modal-title" id="project5Title">Survival Analysis Project</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                  <span aria-hidden="true">&times;</span>
                                </button>
                              </div>
                              <div className="modal-body">
                                <ul style={{textAlign:'left'}}>
                                  <li>Collected and sampled the on-screen movies of different genre from Oct 2012 to Oct 2013 by hand</li>
                                  <li>Performed Kaplan-Meier estimator, the log-rank and weighted log-rank tests</li>
                                  <li>Used Cox proportional-hazards model with time-independent covariates and residuals to access model adequacy</li>
                                  <li>Found the main factors that influence movie gross</li>
                                </ul>
                              </div>
                              <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td style={{verticalAlign:'middle',textAlign:'center'}}><a href='https://github.com/wwt1990/Survival-Analysis' target='_blank' rel="noopener noreferrer">GitHub</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )
          }
        </Media>
      </div>
    );
  }
}

export default Other;